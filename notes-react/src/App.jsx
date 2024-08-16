import React, { useContext, useEffect, useState } from "react";
import styles from "./App.module.css";
import MyNotes from "./components/MyNotes";
import NotesList from "./components/NotesList";
import DefaultPage from "./DefaultPage";
import CreateNew from "./components/CreateNew";
import { AppContext, AppProvider } from "./context/AppContext";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const { group, setGroup } = useContext(AppContext);
  const [colorClass, setColorClass] = useState();
  const [currentGroup, setCurrentGroup] = useState([null, null]);
  const [groupName, setGroupName] = useState("");

  const getShortForm = (key) => {
    const shortForm = key?.match(/\b\w/g).join("").slice(0, 2).toUpperCase();
    return shortForm;
  };

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
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
              <RedirectToHomeOnReload />
            </div>
          </div>{" "}
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

function RedirectToHomeOnReload() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.onbeforeunload = () => {
      sessionStorage.setItem('isPageReloaded', 'true');
    };
    const isPageReloaded = sessionStorage.getItem('isPageReloaded');
    if (isPageReloaded && location.pathname !== '/') {
      navigate('/');
      sessionStorage.removeItem('isPageReloaded');  
    }
  }, [location.pathname, navigate]);

  return null;
}

export default App;
