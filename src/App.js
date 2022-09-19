/*import './App.css';*/
import React, { useState } from 'react';
import ToDo from "./components/ToDo/ToDo";
import Flexcontainer from './components/Flexcontainer/Flexcontainer';
import Todos from './components/db/db';
function App() {
  const [state, setState] = useState(Todos);
  const [formData, setformData] = useState({
    title: '',
    description: ''
  });
  const [mode, setMode] = useState("create");
  const handleSelectedforupdate = (todo) => {
    setformData(todo);
    setMode('update');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "create") {
      setState([...state, { ...formData, id: Math.random() * 1000 }]);
    }
    else {
      setState(state.map((item) => (item.id === formData.id ? formData : item))
      );
      setMode("create");
    }
      setformData({
        id: 0,
        title: "",
        description: ""
      });
    };
    const handleDeleteToDo = (id) => {
      setState(state.filter((item) => item.id !== id));
    };
    const handleUpdateinput = (e) => {
      setformData({...formData,[e.target.name]:e.target.value});
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <span>Title</span>
          <input type="text" name="Title" value={formData.title} onChange={handleUpdateinput} />
          <span>description</span>
          <input type="text" name="description" value={formData.description} onChange={handleUpdateinput} />
          <input type={"submit"} value="save" style={{ margin: 5 }} />
        </form>
        <Flexcontainer>
          {state.map((todo) => (
            <ToDo
              key={todo.id.toString()}
              title={todo.title}
              description={todo.description}
              onClick={() => handleDeleteToDo(todo.id)}
              onClickUpdate={() => handleSelectedforupdate(todo)}
            />
          ))}
        </Flexcontainer>
      </div>
    );
  };
  

export default App;
