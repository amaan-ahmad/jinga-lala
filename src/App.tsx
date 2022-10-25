import "./styles.css";
import { useState } from "react";
import { jsPDF } from "jspdf";
import data from "./data.json";

export default function App() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const magic = () => {
    const doc = new jsPDF();
    doc.addImage(data.front, "JPEG", 5, 5, 200, 80);
    doc.setFontSize(12);
    doc.text(name, 26, 60);
    doc.text("# 1111", 100, 60);
    doc.save("ticket.pdf");
  };
  return (
    <div className="App">
      Your good name:
      <input type="text" onChange={handleChange} value={name} /> <br />
      <button onClick={magic}>meowwww</button>
    </div>
  );
}
