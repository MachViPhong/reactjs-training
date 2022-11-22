import React, { Component } from "react";

export default class HandleEvent extends Component {

    handleClickMe = (event) => {
        console.log(event)
        //lấy ra thẻ từ biến Event
        console.log(event.target);
        let tag = event.target; //lấy chính thẻ xảy ra sự kiện (button)
        tag.innerHTML = 'Clicked';
        tag.style.color = 'red';
        // alert("hello");
    };

    sayHello = (name) =>{
        alert('hello ' + name);
    }
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-success"
          onClick={this.sayHello.bind(this, 'phong')}
            
            /*
            (event) => {
            //lấy ra thẻ từ biến Event
            console.log(event.target);
            let tag = event.target; //lấy chính thẻ xảy ra sự kiện (button)
            tag.innerHTML = 'Clicked';
            tag.style.color = 'red';
            // alert("hello");
          }*/
        
          
        
        >
          Click me
        </button>
      </div>
    );
  }
}
