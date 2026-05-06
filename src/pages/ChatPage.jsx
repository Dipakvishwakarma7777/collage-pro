import { useState } from "react";

function ChatPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">Team Chat</h1>

      <div className="bg-white rounded-xl shadow-lg h-96 p-5 mb-5">
        <p>Hello Team</p>
      </div>

      <div className="flex gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message"
          className="flex-1 border p-3 rounded"
        />

        <button className="bg-blue-600 text-white px-5 rounded">Send</button>
      </div>
    </div>
  );
}

export default ChatPage;
