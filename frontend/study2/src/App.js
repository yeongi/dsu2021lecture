import react, {useEffect, useState} from 'react';
import './App.css';
import Child from './Child';

function App() {

  const [name, setName] = useState("장의영");

  //state를 배열로 관리하기 위함
  const [list, setList] = useState([]);


  useEffect(()=>{
    if(name === "장의영"){
      alert(name);
    }
    
  },[name]);

  const onAppendName = () => {
    console.log(":되니??");
    setList(list.concat(name));
  }

  return (
    <div>
      <input value={name} onChange={e =>setName(e.target.value)}/>
      <button onClick={onAppendName}> 추가 </button>
      <br/>
      {list.map(item => <div>{item}</div>)}
    </div>
    
  );
}

export default App;
