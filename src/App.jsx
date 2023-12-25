import "./App.css"
import {useEffect,useState,useRef} from "react"

const App = () => {
  return (
    <>
      <div className="container">
        <h1>NotePad</h1>
        <TextBox />
      </div>
    </>
  )
}

const TextBox = () => {
  const [text,setText] = useState("");
  const [wordCount,setWordCount] = useState(0);
  const [charCount,setCharCount] = useState(0);
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleUppercase = () => {
    setText(text.toUpperCase());
  }
  const handleLowercase = () => {
    setText(text.toLowerCase());
  }
  const handleEmailExtraction = () => {
    const emails = extractEmails(text);
    
  }
  const extractEmails = (txt) => {/*
    const emailRegex = `/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g`;
    const matches = txt.match(emailRegex);
    return matches || [];*/
  }
  useEffect(()=>{
    setCharCount(text.length);
    setWordCount(text.length > 0 ? text.split(" ").length : text.split(" ").length - 1)
  },[text])
  return (
    <>
    <div className="text-info-container">
      <textarea placeholder="Type Something..." ref={textBoxRef} onChange={handleChange} value={text} resizable="false"></textarea>
      <div className="text-info">
        Characters : {charCount} <br />
        Words : {wordCount}
      </div>
      <div className="transform-text-btns">
        <button onClick={handleUppercase}>Uppercase</button>
        <button onClick={handleLowercase}>Lowercase</button>
        <button onClick={()=>setText("")}>Clear</button>
      </div>
      <div className="extract-emails">
        <button onClick={handleEmailExtraction}>Extract Emails</button>
      </div>
    </div>
    </>
  )
}


export default App