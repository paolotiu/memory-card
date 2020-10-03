//Modal react bootstraqp
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'

import React, { useState, useEffect} from 'react';
import Card from './components/Card'
import Header from './components/Header'
import defaultCharacters from './characters.json'
import './App.css'
import shuffle from './shuffle'
import NewCard from './components/NewCard'



function App() {
  let savedScore = JSON.parse(localStorage.getItem('bestScore'))
  if(savedScore === null){
    savedScore = 0;
  }
    const [editing, setEditing] = useState(true)
    const [show, setShow] = useState(false)
    const [characters, setCharacters] = useState(defaultCharacters)
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(savedScore)
    const [clicked, setClicked] = useState(Array(characters.length).fill(false))

    const checkIfClicked = (index) => {
      if(clicked[index]){

        
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
        localStorage.setItem('bestScore', JSON.stringify(score))
      }
      setScore(0)
      resetClicked()
    }

    const resetClicked = () => {
      setClicked(Array(characters.length).fill(false))
    }

    

    const makeNewCard = (info) => {
      endGame()
      setCharacters(prev => {
        let temp = prev.slice()
        temp.push(
          {
            id: temp.length + 1,
            name: info.name,
            img: info.img,
            occupation: info.occupation,
          }
        )
        return temp
      })
    }

    function deleteCard(index){
      let temp = characters.slice()
      temp.splice(index, 1)
      setCharacters(temp)
    }


    let cards = characters.map((character, index) => {
      return(
        <Card deleteCard={deleteCard} editing={editing} checkIfClicked={checkIfClicked} index={index} character={character}/>
      )
    })

  return (
    <div className="gameboard">
      <Modal show={show}>
        <NewCard makeNewCard={makeNewCard} setShow={setShow} />
      </Modal>
      <Header setEditing={setEditing} score={score} bestScore={bestScore} />
      {/* <div>{clicked.map((x) => x ? 'true' : 'false')}</div> */}
      {shuffle(cards)}
      <Card form={true} showModal={() => setShow(true)}/>
    </div>
  );
}

export default App;
