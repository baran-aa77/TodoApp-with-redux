import React from 'react'
import ToDo from "./ToDo/ToDo";

import Flexcontainer from './Flexcontainer/Flexcontainer';
import { deletetodo } from '../redux/slice/Todoslice';
import { updatetodo } from '../redux/slice/Todoslice';
import { addtodo } from '../redux/slice/Todoslice';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Background from "../image/todo.png";

const Home = () => {
    const Todos=useSelector((state)=>state.todo)
    const dispatch=useDispatch()
    const [state,setState] = useState(Todos);
  const [formData, setformData] = useState({
    title: '',
    description: ''
  });
  const [mode, setMode] = useState("create");
  const handleSelectedforupdate = (todo) => {
    dispatch(updatetodo(formData))
    setformData(todo);
    setMode('update');
  };
  const submit = (e) => {
    e.preventDefault();
      dispatch(addtodo(formData))

      setformData({
        id: 0,
        title: "",
        description: ""
      });
    };
    const handleDeleteToDo =id=> {
        dispatch(deletetodo(id))
    };
    const handleUpdateinput = (e) => {
      setformData({...formData,[e.target.name]:e.target.value});
      setMode('create');
    }
      
  return (
    <div>
    <form onSubmit={submit} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
      <input type="text" name="title" value={formData.title} onChange={handleUpdateinput} placeholder='Title' style={{border:'1px solid #1c2dc7'}} />
      <input type="text" name="description" value={formData.description} onChange={handleUpdateinput} placeholder='Description' style={{border:'1px solid #1c2dc7'}}/>
      <input type={"submit"} value="save" style={{ margin: 5,backgroundColor:'#dce1f5' ,border:'1px solid #1c2dc7'}} />
    </form>
    <Flexcontainer>
      <div style={{display:'flex',justifyContent:'center'}}>
        <img src={Background} width={'200px'}/>
      </div>

      {Todos.map((todo) => (
        <ToDo
          key={todo.id.toString()}
          title={todo.title}
          description={todo.description}
          onClick={() => handleDeleteToDo(todo.id)}
          onClickUpdate={() =>handleSelectedforupdate(todo)}
        />
      ))}
    </Flexcontainer>
  </div>
  )
}

export default Home
