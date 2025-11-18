import { useState, useEffect } from 'react'


function App() {

  console.log("Hello from React!");

  useEffect(() => {
    console.log("In the effect");
  }, []);

  
  let hello = "hello!"
  let arr = [1,2,3,4,5,6];





  return (
    
    <>
    {hello}
    {arr.map((el, index) => (
      <b key={index}>{el}</b>
      ))}
    </>
  )
}

export default App
