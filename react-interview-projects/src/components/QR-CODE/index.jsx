import QRCode from "react-qr-code";
import "./styles.css";
import { useState } from "react";
export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  function handleQrCode() {
    setQrCode(input);
    setInput('');
  }
  return (
    <div id="container">
      <h1>QR CODE GENERATOR</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your text"
          name="qr-code"
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleQrCode}
        >
          Generate
        </button>
      </div>
      
        <div>
          <QRCode id="qr-code" value={qrCode} size={200} bgColor="#fff"/>
        </div>
      
    </div>
  );
}
