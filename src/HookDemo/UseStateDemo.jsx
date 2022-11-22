//rafce
import React, { useState } from 'react'
//Đây là function component => không có con trỏ this (cũng k có state props như class)
const UseStateDemo = () => {
    /*
    let [state, setState] = useState({
        number: 1,
        fontSize: 16,
    })
        */
    let [number, setNumber] = useState(10); //[state,hàm setState]
    let [fontSize, setFontSize] = useState(16);
    console.log('number', number);

    const handleChangeFontSize = (fSize) =>{
        let newFontSize = fontSize +fSize;
        setFontSize()
    }
  return (
    <div className='container'>
        <h3>Ví dụ 1: Tăng giảm âm lượng</h3>
        <p>Number : {number}</p>
        <button className='btn btn-success mx-2' onClick={()=>{
            let newNumber = number +1;
            //hàm setState sẽ nhận vào state mới thay thế state cũ đồng thời render lại function
            setNumber(newNumber);
        }}>+</button>
        <button className='btn btn-success mx-2'>-</button>

        <hr />
        <h3>Ví dụ 2: Tăng giảm fontSize</h3>
        <p style={{fontSize: fontSize}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit animi labore tenetur similique dicta quo temporibus explicabo facere. Laudantium fugiat fuga vero alias magni officia praesentium, eos rerum. Distinctio.
        </p>
        <button className="btn btn-success mx-2" onClick={()=>{
            handleChangeFontSize(5)
        }}>+</button>
        <button className="btn btn-success mx-2" onClick={()=>{
            handleChangeFontSize(-5)
        }}>-</button>
    </div>
  )
}

export default UseStateDemo