import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";


import styles from "./CreateNew.module.css";
import DefaultPage from "../DefaultPage";
import MyNotes from "./MyNotes";
import { useNavigate } from "react-router-dom";

export default function CreateNew({closePopup,colorClass,setColorClass,groupName,setGroupName,handleAddGroup,setGroup}) {
    const {allNotes,setAllnotes}=useContext(AppContext)
    const[newNote,setNewNote]=useState(allNotes?.newNote||{})
    const navigate=useNavigate();

    const createHandler = () => {
      handleAddGroup();
      
      navigate('/created',{replace:true});
      closePopup();
      setColorClass("") 
      setGroupName("")
      // setGroup([colorClass,groupName])
  };
    
    const handleInputChange=(e)=>{
        setGroupName(e.target.value)
    }
       
    const handleColor=(e)=>{
        setColorClass(e.target.getAttribute("value"))
    }
    
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Create New group</h2>
      <div className={styles.group}>
        <h3 className={styles.groupLeft}>Group Name</h3>
        <input
          type="text"
          value={groupName}
          className={styles.groupInput}
          placeholder="Enter group name"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.colorChoice}>
        <h3 className={styles.colorText}>Choose colour</h3>
        <div className={styles.colorBalls}>
          <div value="voilet" className={`${styles.color} ${styles.voilet} ${colorClass === 'voilet' ? styles.selected : ''}`}
          //   className={
          //   colorClass==="voilet"?styles.voilet + " " + styles.color+" "+styles.selected:styles.voilet + " " + styles.color
          // }
           onClick={(e)=>handleColor(e)}></div>
          <div value="pink" className={`${styles.color} ${styles.pink} ${colorClass === 'pink' ? styles.selected : ''}`} onClick={(e)=>handleColor(e)}></div>

          <div value="skyBlue" className={`${styles.color} ${styles.skyBlue} ${colorClass === 'skyBlue' ? styles.selected : ''}`} onClick={(e)=>handleColor(e)}></div>

          <div value="brown" className={`${styles.color} ${styles.brown} ${colorClass === 'brown' ? styles.selected : ''}`} onClick={(e)=>handleColor(e)}></div>
          <div value="darkBlue" className={`${styles.color} ${styles.darkBlue} ${colorClass === 'darkBlue' ? styles.selected : ''}`} onClick={(e)=>handleColor(e)}></div>
          <div value="blue" className={`${styles.color} ${styles.blue} ${colorClass === 'blue' ? styles.selected : ''}`} onClick={(e)=>handleColor(e)}></div>
        </div>
      </div>
      
          <button className={styles.createButton}onClick={createHandler}>Create</button>
        
    </div>
  );
}
//////////
