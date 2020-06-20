import React, {useState, useEffect} from 'react'

export default function Contact({page}) {
    const [initHolder, setCondition] = useState({
        initFirstValue: '',
        initSecondValue: 'second'
    });

    let {initFirstValue, initSecondValue} = initHolder ;
    const handleChange =(e)=> {
        console.log(e.target) 
        const {name, value} = e.target ;
        setCondition(oldState => ({ ...oldState , [name]: value}))
     
    }

    useEffect(() => console.log(`the second value is ${initHolder.initSecondValue}`)) ;

    return (
        <div>
            <h1>welcome to bar-x {page}</h1>
            <input type= 'text' name='initFirstValue' 
                value={initFirstValue} 
                onChange ={handleChange}
                required
             /> 
        </div>
    )
}
