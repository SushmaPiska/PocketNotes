import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import styles from "./CreateNew.module.css";

export default function CreateNew({ closePopup, colorClass, setColorClass, groupName, setGroupName, handleAddGroup, setGroup }) {
  const { allNotes, setAllnotes } = useContext(AppContext);
  const [newNote, setNewNote] = useState(allNotes?.newNote || {});
  const [selectedColor, setSelectedColor] = useState(colorClass); 
  const navigate = useNavigate();

  const createHandler = () => {
    closePopup(); 
    handleAddGroup();
    navigate('/created');
  };

  const handleInputChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleColor = (color) => {
    setSelectedColor(color); 
    setColorClass(color); 
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Create New group</h2>
      <div className={styles.group}>
        <h3 className={styles.groupLeft}>Group Name</h3>
        <input
          type="text"
          className={styles.groupInput}
          placeholder="Enter group name"
          value={groupName}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.colorChoice}>
        <h3 className={styles.colorText}>Choose colour</h3>
        <div className={styles.colorBalls}>
          <div
            style={{ backgroundColor: 'violet' }}
            className={`${styles.color} ${selectedColor === 'violet' ? styles.selected : ''}`}
            onClick={() => handleColor('violet')}
          ></div>
          <div
            style={{ backgroundColor: 'pink' }}
            className={`${styles.color} ${selectedColor === 'pink' ? styles.selected : ''}`}
            onClick={() => handleColor('pink')}
          ></div>
          <div
            style={{ backgroundColor: 'skyblue' }}
            className={`${styles.color} ${selectedColor === 'skyblue' ? styles.selected : ''}`}
            onClick={() => handleColor('skyblue')}
          ></div>
          <div
            style={{ backgroundColor: 'brown' }}
            className={`${styles.color} ${selectedColor === 'brown' ? styles.selected : ''}`}
            onClick={() => handleColor('brown')}
          ></div>
          <div
            style={{ backgroundColor: 'darkblue' }}
            className={`${styles.color} ${selectedColor === 'darkblue' ? styles.selected : ''}`}
            onClick={() => handleColor('darkblue')}
          ></div>
          <div
            style={{ backgroundColor: 'blue' }}
            className={`${styles.color} ${selectedColor === 'blue' ? styles.selected : ''}`}
            onClick={() => handleColor('blue')}
          ></div>
        </div>
      </div>

      <button className={styles.createButton} onClick={createHandler}>Create</button>
    </div>
  );
}
