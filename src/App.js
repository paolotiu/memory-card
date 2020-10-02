import React, { useState, useEffect} from 'react';
import Card from './components/Card'
import Header from './components/Header'
import characters from './characters.json'
import './App.css'
import shuffle from './shuffle'
import { render } from '@testing-library/react';


function App() {
  let savedScore = JSON.parse(localStorage.getItem('bestScore'))
  if(savedScore === null){
    savedScore = 0;
  }
  
    console.log(savedScore)
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(savedScore)
    const [clicked, setClicked] = useState(Array(characters.length).fill(false))

    const checkIfClicked = (index) => {
      if(clicked[index]){
        console.log('sad')
        setScore(0)
        endGame()
      }else{
        setScore(score + 1)
        setClicked(prev => {
          let arr = prev.slice()
          arr[index] = true;
          return arr;
        })
      }
    }

    const endGame = () => {
      if(score > bestScore){
        setBestScore(score)
      }
      localStorage.setItem('bestScore', JSON.stringify(bestScore))
      resetClicked()
    }

    const resetClicked = () => {
      setClicked(Array(characters.length).fill(false))
    }

    let cards = characters.map((character, index) => {
      return(
        <Card checkIfClicked={checkIfClicked} index={index} character={character}/>
      )
    })

    useEffect(() => {

    },[clicked])

  return (
    <div className="gameboard">
      <Header score={score} bestScore={bestScore} />
      {/* <div>{clicked.map((x) => x ? 'true' : 'false')}</div> */}
      {shuffle(cards)}
    </div>
  );
}

export default App;
