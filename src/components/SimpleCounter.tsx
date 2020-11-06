import React, {ChangeEvent, useState} from 'react'

function SimpleCounter(props:{startingNumber:number} )
{
    //Variable declarations.
    const [firstValue, setFirstIncrementValue] = useState(1)

    const [secondValue, setSecondIncrementValue] = useState(1);

    const [answer, setCurrentValue] = useState(2);

    //Math functions
    function OnClickAdd(){
        setCurrentValue(firstValue + secondValue);
    }

    function OnClickSubtract(){
        setCurrentValue(firstValue - secondValue);
    }

    function OnClickMultiply(){
        setCurrentValue(firstValue * secondValue);
    }

    function OnClickDivide(){
        setCurrentValue(firstValue / secondValue)
    }

    //Increment each individual value
    function OnChangeIncrementFirstBy(event:ChangeEvent<HTMLInputElement>)
    {
        setFirstIncrementValue(Number(event.target.value))
    }

    function OnChangeIncrementSecondBy(event:ChangeEvent<HTMLInputElement>)
    {
        setSecondIncrementValue(Number(event.target.value))
    }

    //Resulting code and HTML.
    return (<div>
        First Number: {firstValue}<br />
        Second Number: {secondValue}<br />
        Answer: {answer}<br />
        <input type="number" defaultValue={1} value={firstValue} onChange={OnChangeIncrementFirstBy}></input>
        <input type="number" defaultValue={1} value={secondValue} onChange={OnChangeIncrementSecondBy}></input><br />
        <button onClick={OnClickAdd}>Add</button><br /> <button onClick={OnClickSubtract}>Subtract</button><br/>
        <button onClick={OnClickMultiply}>Multiply</button><br /><button onClick={OnClickDivide}> Divide </button>
    </div>
        )
}

export default SimpleCounter