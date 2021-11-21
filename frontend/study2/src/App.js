import {useState} from 'react';
import './App.css';
import Child from './Child';

function App() {

  const odj = {name : "이름" , value : "장의영"};

  const {id, value} = odj;

  const [name, setName] = useState("장의영");

  // const renderMarkUp = () => {
  //   return (
  //     <div>
  //       <h1>뾰로로로룡</h1>
  //       <Child name = {name}/>
  //       <span>{name}</span>
  //     </div>
  //   )
  // }

  return (
    <div>
      <button onClick={()=>{setName("없어짐")}}> 클릭 </button>
      <Child name = {name} onchangeName = {(value)=>{setName(value)}} />
    </div>
    
  );
}

export default App;
