import React from 'react'
import './css/NewCard.css'
const NewCard = (props) => {
    const [info, setInfo] = React.useState({
        img: '',
        name: '',
        occupation: '',
    })

    function handleOnChange(e) {
        let input = e.target.name
        let value;
        if(e.target.files){
            value = URL.createObjectURL(e.target.files[0])
            console.log(value)
        }else{
            value = e.target.value
        }
        
        setInfo({ ...info, [input]: value })
    }

    if(props.form){
        
    }
    return (
        <div className="makeNewCard">
            <input type="file" name="img"  onChange={handleOnChange} />
            <br />
            <input type="text" name="name" placeholder="Name" onChange={handleOnChange} />
            <br />
            <input type="text" name="occupation" placeholder="Occupation" onChange={handleOnChange} />
            <br />
            <button
                type="submit"
                onClick={() => {
                    props.setShow(false)
                    props.makeNewCard(info)
                }}
            >
                Make New Card!
            </button>
        </div>
    )
}

export default NewCard
