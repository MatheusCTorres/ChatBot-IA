import { useRef } from "react";

export default function ChatForm({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}) {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();

    if (!userMessage) return;
    inputRef.current.value = ""; // clear input after getting the value

    // update chat historu with the user's message
    setChatHistory((history) => [
      ...history,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    // delay 600ms before showing "thinking..." and generating response
    setTimeout(() => {
      // add a "thinking..." placeholder for the bot's response
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "thinking..." },
      ]);

      // call the function to geneeate the bot's response
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: userMessage },
      ]);
    }, 600);
  };
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
}
