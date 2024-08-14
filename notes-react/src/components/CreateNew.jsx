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
      closePopup(); 
      navigate('/created');
      handleAddGroup();
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
          className={styles.groupInput}
          placeholder="Enter group name"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.colorChoice}>
        <h3 className={styles.colorText}>Choose colour</h3>
        <div className={styles.colorBalls}>
          <div value="voilet" className={styles.voilet + " " + styles.color} onClick={(e)=>handleColor(e)}></div>
          <div value="pink" className={styles.pink + " " + styles.color} onClick={(e)=>handleColor(e)}></div>
          <div value="skyBlue" className={styles.skyBlue + " " + styles.color} onClick={(e)=>handleColor(e)}></div>
          <div value="brown" className={styles.brown + " " + styles.color} onClick={(e)=>handleColor(e)}></div>
          <div value="darkBlue" className={styles.darkBlue + " " + styles.color} onClick={(e)=>handleColor(e)}></div>
          <div value="blue" className={styles.blue + " " + styles.color} onClick={(e)=>handleColor(e)}></div>
        </div>
      </div>
      
          <button className={styles.createButton}onClick={createHandler}>Create</button>
        
    </div>
  );
}
