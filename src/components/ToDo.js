import React, {useState, useEffect} from 'react';

import { RiCheckboxBlankFill, RiCheckboxFill } from 'react-icons/ri'



const ToDo = () => {

    const [isCompleted, setIsCompleted] = useState(false);

    const [eventTarget, setEventTarget] = useState(null);

    const [initxValue, setInitxValue] = useState(null);
    const [xValue, setxValue] = useState(0);

    let checkBox;
    if(isCompleted) {
        checkBox = <RiCheckboxFill className='text-slate-300 text-3xl mr-5' />
    } else {
        checkBox = <RiCheckboxBlankFill className='text-slate-300 text-3xl mr-5' />
    }

    //Mouse Down Value change
    useEffect(() => {
        if(eventTarget){
            eventTarget.addEventListener('mousemove',mouseMove);
        }
    }, [initxValue])

    let handleMouseDown = (e) => {
        setEventTarget(e.target)
        setInitxValue(e.clientX)
    }
    
    let mouseMove = (e) => {
        console.log(setInitxValue)
    }

    return (
        <div className="ToDo bg-slate-600 rounded-md p-3 mt-5 text-left"
        onMouseDown={handleMouseDown}>
            <div className='flex items-center'>
                {checkBox}
                <p>This is a task</p>
            </div>
        </div>
    );  
}

export default ToDo;