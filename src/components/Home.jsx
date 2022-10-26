import React from 'react'
import ToDo from "./ToDo/ToDo";
import Flexcontainer from './Flexcontainer/Flexcontainer';
import { deletetodo } from '../redux/slice/Todoslice';
import { updatetodo } from '../redux/slice/Todoslice';
import { addtodo } from '../redux/slice/Todoslice';
/*import Todos from './db/db';*/
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
const Home = () => {
    const Todos=useSelector((state)=>state.todo)
    const dispatch=useDispatch()
    const [state, setState] = useState(Todos);
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
      setformData({...formData,[e.target.name]:e.target.value});}
  return (
    <div>
    <form onSubmit={submit}>
      <span>Title</span>
      <input type="text" name="Title" value={formData.title} onChange={handleUpdateinput} />
      <span>description</span>
      <input type="text" name="description" value={formData.description} onChange={handleUpdateinput} />
      <input type={"submit"} value="save" style={{ margin: 5 }} />
    </form>
    <Flexcontainer>
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
