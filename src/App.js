import { useState } from "react";
import "./styles.css";

export default function App() {
  const contacts = [
    { name: "Taylor", email: "taylor@mail.com" },
    { name: "Alice", email: "alice@mail.com" },
    { name: "Bob", email: "bob@mail.com" },
    { name: "Tyson", email: "tyson@mail.com" },
    { name: "Rana", email: "rana@email.com" },
  ];

  const [state, setState] = useState(contacts[0]);

  const handleAlert = () => {
    alert("Mail sent to " + state.email);
  };

  return (
    <div className="container">
      <h1 className="header">Chat App</h1>
    
      <div className="contact-list">
        {contacts.map((i) => (
          <button
            key={i.email}
            className={`contact-button ${
              state.name === i.name ? "active" : ""
            }`}
            onClick={() => setState(i)}
          >
            {i.name}
          </button>
        ))}
      </div>

      <div className="chat-box">
        <input
          type="text"
          placeholder={`Chat with ${state.name}`}
        />
        <button onClick={handleAlert}>
          Send to {state.email}
        </button>
      </div>
    </div>
  );
}
