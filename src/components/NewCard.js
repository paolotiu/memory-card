import React from 'react'

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
        <div>
            <input type="file" name="img" onChange={handleOnChange} />
            <br />
            <input type="text" name="name" onChange={handleOnChange} />
            <br />
            <input type="text" name="occupation" onChange={handleOnChange} />
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
