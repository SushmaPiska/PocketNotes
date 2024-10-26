import React, { useEffect, useState, useRef } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "./NotesList.module.css";
import MyNotes from "./MyNotes";
import CreateNew from "./CreateNew";
import { useNavigate } from "react-router-dom";
import "./color.css";

export default function NotesList({
  group,
  setGroup,
  setCurrentGroup,
  colorClass,
  setColorClass,
  groupName,
  setGroupName,
  getShortForm,
  handleLeftComponentClick,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef();
  const [activeGroup, setActiveGroup] = useState(null);

  const handleAddGroup = () => {
    if (!groupName.trim() || !colorClass) {
      console.log("input something");
      return;
    }
    setCurrentGroup([colorClass, groupName]);
    setGroup((prevGroup) => [...prevGroup, [colorClass, groupName]]);

    setGroupName("");
    // closePopup();
  };

  const navigate = useNavigate();

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Pocket Notes</h1>
      </div>

      <div className={styles.body}>
        {group.map((text, index) => (
          <div
            key={index}
            className={styles.groupp}
            onClick={() => {
              setCurrentGroup([text[0], text[1]]);
              navigate("/created");
              setActiveGroup(index);
              handleLeftComponentClick();
            }}
            style={{
              background: activeGroup === index && "#2F2F2F2B",
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
        className={styles.popup}
        // contentStyle={{ width: "45%" }}
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
        {(close) => <CreateNew
          closePopup={close}
          colorClass={colorClass}
          setColorClass={setColorClass}
          groupName={groupName}
          setGroupName={setGroupName}
          handleAddGroup={handleAddGroup}
          setGroup={setGroup}
        />}
        {/* <CreateNew
          closePopup={closePopup}
          colorClass={colorClass}
          setColorClass={setColorClass}
          groupName={groupName}
          setGroupName={setGroupName}
          handleAddGroup={handleAddGroup}
          setGroup={setGroup}
        /> */}
      </Popup>

      {/* <div className={styles.addButton} >+</div> */}
    </div>
  );
}
