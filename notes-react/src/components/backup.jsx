
////////////////////////////////////////////////

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
// react-router-dom version 5.3.0 for Redirecting
///////////////////////////////////////////
import React, { useEffect, useState, useRef } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "./NotesList.module.css";
import MyNotes from "./MyNotes";
import CreateNew from "./CreateNew";
import { useNavigate } from "react-router-dom";
import "./color.css";

export default function NotesList({group, setGroup,setCurrentGroup,colorClass, setColorClass,groupName, setGroupName,getShortForm}) {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef();
  const [activeGroup,setActiveGroup]=useState(null)

  const handleAddGroup = () => {
    if (!groupName.trim() ) {
      console.log("input something");
      return;
    }
    setCurrentGroup([colorClass,groupName])
    setGroup((prevGroup) => [...prevGroup, [colorClass,groupName]]);

    setGroupName("");
  };
 
  
  const navigate=useNavigate();

  const openPopup=()=>setIsOpen(true);
  const closePopup=()=>setIsOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 >Pocket Notes</h1>
      </div>

      <div className={styles.body}>
                 
      {group.map((text, index) => (
          <div
            key={index}
            className={styles.groupp}
            onClick={() => {
              setCurrentGroup([text[0], text[1]]);

              navigate('/created');
              setActiveGroup(index);
            }}
            style={{
              background:activeGroup===index&&'#2F2F2F2B'
            }}
          >
            <div className={styles.iconSpace}>
              <h3 className={text[0]}>{getShortForm(text[1])}</h3>
            </div>
            <div className={styles.groupsName}>{text[1]}</div>
          </div>
        ))}
        
     
      </div>

      <Popup
        contentStyle={{ width: "45%" }}
        trigger={
          <div className={styles.addButton} onClick={openPopup}>
            +
          </div>
        }
        modal
        nested
        open={isOpen}
        onClose={() => setIsOpen(false)}
        ref={popupRef}
      >
        <CreateNew
          closePopup={closePopup} 
          colorClass={colorClass}
          setColorClass={setColorClass}
          groupName={groupName}
          setGroupName={setGroupName}
          handleAddGroup={handleAddGroup}
          setGroup={setGroup}
        />
      </Popup>

      {/* <div className={styles.addButton} >+</div> */}
    </div>
  );
}
