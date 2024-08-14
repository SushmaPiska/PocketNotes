import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [group, setGroup] = useState(() => {
    const savedGroup = localStorage.getItem("group");
    return savedGroup ? JSON.parse(savedGroup) : [];
  });

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : {};
  });

  useEffect(() => {
    localStorage.setItem("group", JSON.stringify(group));
  }, [group]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <AppContext.Provider
      value={{
        group,
        setGroup,
        notes,
        setNotes
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


  // useEffect(()=>{
  //   localStorage.getItem("group")? localStorage.setItem("group",JSON.stringify(group)):[]
  // },[group])


  // group=JSON.parse(localStorage.getItem("group"))?JSON.parse(localStorage.getItem("group")):[]


  //   const MyNote={"color":"red","content":"gh"}
  //   const [allNotes, setAllNotes] = useState(() => {
  //     const savedNotes = localStorage.getItem('allNotes');
  //     return savedNotes ? JSON.parse(savedNotes) : {}; 
  //   });
 
  //   localStorage.setItem("allNotes",JSON.stringify(allNotes))
  
  
  // useEffect(()=>{

  //   localStorage.setItem("group",JSON.stringify(group),[group])
  // })

  // const addNewNote = (noteKey, noteValue) => {
      
  //   setAllNotes(prev => {
  //     var updatedNotes;
  //     if(!prev[noteKey]){
  //       updatedNotes = {
  //         ...prev,
  //         [noteKey]: noteValue
  //       };
  //     }else{
  //       const updatedNote={
  //         ...prev[noteKey],
  //         content:[...prev[noteKey].content,noteValue.content]
  //       }
  //       updatedNotes={
  //         ...prev,
  //         [noteKey]:updatedNote
  //       }
  //     }
     
  //     localStorage.setItem('allNotes', JSON.stringify(updatedNotes)); 
      
  //     return updatedNotes;
  //   });
  // };




// var obj = {
//   "Notes Yert sdfghjjj": ["hello", "asfghjg"],
//   "Notes2 Wert": ["hello", "sdfgh"],
//   "Notes3 fg": ["hello", "jk"],
// };

// {Object.entries(obj).map(([key, value], index) => {
//   console.log("Key : " + key + " , " + "Value : " + value);
//   console.log(key.match(/\b\w/g).join("").slice(0, 2).toUpperCase());
//   value.map((xx, index) => console.log(xx));
// })}
