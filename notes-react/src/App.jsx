import React, { useContext, useEffect, useState } from "react";

import styles from "./App.module.css";
import MyNotes from "./components/MyNotes";
import NotesList from "./components/NotesList";
import DefaultPage from "./DefaultPage";
import CreateNew from "./components/CreateNew";
import { AppContext, AppProvider } from "./context/AppContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Redirect } from "react-router-dom";

function App() {
  const { group, setGroup } = useContext(AppContext);

  const [colorClass, setColorClass] = useState();
  // const [group, setGroup] = useState([]);
  const [currentGroup, setCurrentGroup] = useState([null, null]);
  const [groupName, setGroupName] = useState("");

  

  const getShortForm = (key) => {
    const shortForm = key?.match(/\b\w/g).join("").slice(0, 2).toUpperCase();
    return shortForm;
  };

  // useEffect(() => {
  //   navigate("/");
  // }, [navigate]);

  return (
    <>
      <AppProvider>
        <BrowserRouter>
         
          <div className={styles.container}>
            <div className={styles.left}>
              <NotesList
                group={group}
                setGroup={setGroup}
                setCurrentGroup={setCurrentGroup}
                colorClass={colorClass}
                setColorClass={setColorClass}
                groupName={groupName}
                setGroupName={setGroupName}
                getShortForm={getShortForm}
              />
            </div>
            <div className={styles.right}>
              {/* <DefaultPage/> */}
              {/* <MyNotes/> */}

              <Routes>
                <Route path="/" element={<DefaultPage />}></Route>
                <Route path="/new" element={<CreateNew />}></Route>
                <Route
                  path="/created"
                  element={
                    <MyNotes
                      currentGroup={currentGroup}
                      getShortForm={getShortForm}
                    />
                  }
                ></Route>
                <Route path="*" element={<Navigate to="/" />}></Route>
                {/* <Redirect to='/'/> */}
              </Routes>
            </div>
          </div>{" "}
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
