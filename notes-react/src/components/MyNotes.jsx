import React, { useContext, useState } from "react";
import styles from "./MyNotes.module.css";
import "./color.css";
import saveButton from "../assets/saveButton.svg";
import { AppContext } from "../context/AppContext";
export default function MyNotes({ currentGroup, getShortForm }) {
  const [inputNote, setInputNote] = useState("");
  // const [notes,setNotes]=useState([])
  const { notes, setNotes } = useContext(AppContext);
  // const[note,setNote]=useState(notes[currentGroup[1]])

  const handleInputChange = (e) => {
    setInputNote(e.target.value);
  };
  const addNote = (key, note) => {
    setNotes((prevNotes) => ({
      ...prevNotes,
      [key]: [...(prevNotes[key] || []), note],
    }));
  };
  const handleAddNote = () => {
    if (!inputNote.trim()) {
      console.log("input something");
      return;
    }
    addNote(currentGroup[1], inputNote);
    // setNote(prevNote=>[...prevNote,inputNote])
    // handleAddNotes(currentGroup[1],note);
    setInputNote("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div style={{ margin: "1% 1%" }} className={currentGroup[0]}>
          {getShortForm(currentGroup[1])}
        </div>
        <div className={styles.groupName}>{currentGroup[1]}</div>
      </div>
      <div className={styles.body}>
        {Array.isArray(notes[currentGroup[1]]) &&
          notes[currentGroup[1]].map((textArray, index) => (
            <div key={index} className={styles.noteBox}>
              {Array.isArray(textArray) ? (
                textArray.map((text, textIndex) => (
                  <div key={textIndex}>{text}</div>
                ))
              ) : (
                <div>{textArray}</div>
              )}
            </div>
          ))}
        {/* {notes[currentGroup[1]]?.map((textArray,index)=>(
          <div key={index} className={styles.noteBox}>{textArray?.map((text,textIndex)=>(
            <div key={textIndex}>{text}</div>
          ))}</div>
        ))} */}
      </div>
      <div className={styles.footer}>
        <textarea
          className={styles.enterNotes}
          name="enterNotes"
          id="enterNotes"
          placeholder="Enter your text here..........."
          value={inputNote}
          onChange={handleInputChange}
        ></textarea>
        <div className={styles.logo} onClick={handleAddNote}>
          -
        </div>
      </div>
    </div>
  );
}
