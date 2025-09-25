import io from 'socket.io-client'
import { useEffect, useState } from 'react';

import './App.css'
import Input from './component/input'; 

function App() {
  const [score, setScore] = useState();
  const [scores, setAllScores] = useState([]);
  const socket = io('http://localhost:3000');

  function connectSocket(){
    socket.on('connect', ()=>{
      console.log(socket)
      
    })
  }

  function handleInput(event){
    let {name, value} = event.target
    let currentObj = {[name]:value};
    setScore((prev) => ({ ...prev, ...currentObj }))
  }

  function sendScores (){
    socket.emit('scores',score)

    socket.on ("playerScore", (playerScore)=>{
      setAllScores(playerScore)
    })
  }

  useEffect( ()=>{
    connectSocket()
  },[])
  return (
    <>
      <h1>react multiplayer dashboard</h1>

      <Input name="name" placeholder="Enter your Name" handleInput={handleInput} />
      <Input name="score" placeholder="Enter your Score" handleInput={handleInput} />
      
      
      
      <button className='send-scores' onClick={sendScores}>Publish Score</button>

      {scores.length > 0 ?<table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores?.map((score, index) => (
            <tr key={index}>
              <td>{score?.name}</td>
              <td>{score?.score}</td>
            </tr>
          ))}
        </tbody>
      </table> : <></> }
    </> 
  )
}

export default App
