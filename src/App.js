//Modal react bootstraqp
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'

import React, { useState} from 'react';
import Card from './components/Card'
import Header from './components/Header'
import defaultCharacters from './characters.json'
import './App.css'
import shuffle from './shuffle'
import NewCard from './components/NewCard'
import uniqid from 'uniqid';


function App() {

  let savedScore = JSON.parse(localStorage.getItem('bestScore'))
  if(savedScore === null){
    savedScore = 0;
  }
    const [editing, setEditing] = useState(false)
    const [show, setShow] = useState(false)

    //check if user has added characters before
    let def;
  
    if(localStorage.getItem('characters') !== null){
      def = JSON.parse(localStorage.getItem('characters'))
    }else{
      def = defaultCharacters
      localStorage.setItem('characters', JSON.stringify(def))
    }
    const [characters, setCharacters] = useState(def)
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
        localStorage.setItem('characters',JSON.stringify(temp))
        return temp
      })
      console.log('eh')
      
    }

    function deleteCard(index){
      let temp = characters.slice()
      temp.splice(index, 1)
      setCharacters(temp)
      localStorage.setItem('characters',JSON.stringify(temp))
    }


    let cards = characters.map((character, index) => {
      return(
        <Card key={uniqid()} deleteCard={deleteCard} editing={editing} checkIfClicked={checkIfClicked} index={index} character={character}/>
      )
    })

  return (
    <>
      <Header editing={editing} setEditing={setEditing} score={score} bestScore={bestScore} />
      <div className="gameboard">
        <Modal show={show} onHide={() => setShow(false)}>
          <NewCard makeNewCard={makeNewCard} setShow={setShow} />
        </Modal>
        {/* <div>{clicked.map((x) => x ? 'true' : 'false')}</div> */}
        {editing ? cards : shuffle(cards) }
        {editing ? <Card form={true} showModal={() => setShow(true)}/> : null}
      </div>
    </>
    
  );
}

export default App;
