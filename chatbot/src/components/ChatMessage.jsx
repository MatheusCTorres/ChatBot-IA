import ChatbotIcon from "./ChatbotIcon";

export default function ChatMessage({ chat }) {
  return (
    <div
      className={`message ${chat.role === "model" ? "bot" : "user"}-message`}
    >
      {/* adding the chatbot icon only if the chat's role is "model" */}
      {chat.role === "model" && <ChatbotIcon />}
      <p className="message-text">{chat.text}</p>
    </div>
  );
}
