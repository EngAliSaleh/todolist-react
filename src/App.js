/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import './App.css';
import TodoCard from './components/todo card';
import TableCard from './components/table card';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App(onClick) {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  
  const handelChange = (e) => {
    setValue(e.target.value)
  }
  async function fetchData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setData(response.data.slice(0 , 0)) //اظهار العدد المطلوب
    }
    catch {
      console.error("Error");

    }


  }



  useEffect(() => {
    fetchData();

  }, [])
  return (
    <div className='container' >
      <h2 className='h2'>TODO List</h2>
      <TodoCard value={value} onchange={handelChange} setData={setData} data={data} setValue={setValue} />
      <TableCard data={data} setData={setData} onClick={onClick} />
    </div>


  );
}

export default App;
