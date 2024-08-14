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
  // const [colorClass, setColorClass] = useState();
  // const [group, setGroup] = useState([]);
  // const [groupName, setGroupName] = useState("");
  const popupRef = useRef();

  // const getShortForm = (key) => {
  //   key.match(/\b\w/g).join("").slice(0, 2).toUpperCase();
  // };

  const handleAddGroup = () => {
    if (!groupName.trim() ) {
      console.log("input something");
      return;
    }
    setCurrentGroup([colorClass,groupName])
    setGroup((prevGroup) => [...prevGroup, [colorClass,groupName]]);

    setGroupName("");
  };
  // const changeMyNote=(text)=>{
  //   setCurrentGroup([text[0],text[1]])
  // }
  
  const navigate=useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 >Pocket Notes</h1>
      </div>

      <div  className={styles.body}>
                 
      {group.map((text, index) => (
          <div
            key={index}
            className={styles.groupp}
            onClick={() => {
              setCurrentGroup([text[0], text[1]])
              navigate('/created')
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
          <div className={styles.addButton} onClick={() => setIsOpen(true)}>
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
          closePopup={() => setIsOpen(false)} 
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
