import React, {useState} from "react";
import TodoList from "./components/todolist";
import Additem from "./components/additem";
import "./App.css";
const App = () => 
{
      const [listitem , setlistitem] = useState([]);
      // [
      //       { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "Buy Food" },
      //       { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "Watch TV" },
      //       { itemid: Math.trunc(Math.random() * 100 + 1), itemname: "study" },
      // ]
      
      // const listitems = ;
    
      const additemhandler = (newitem) => {
            setlistitem((previouslist) =>{
                  return previouslist.concat(newitem);
            });
            // listitem.push(newitem);
            // console.log(listitem);
      };
    
      const name = "MERN";
      return <div className="container">
            <h1>{name}'s Todo List</h1>
            <Additem  onadditem = {additemhandler} />
            <TodoList list = {listitem} />
      </div>
};
export default App;