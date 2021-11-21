import react from 'react';

const Child = (props) => {
  return(
    <>
      <h1>{props.name}</h1>
      <input value={props.name} onChange={(e)=>{ props.onchangeName(e.target.value)}}/>
    </>
  
  )
}

export default Child;