//rcc
import React, { Component } from "react";

export default class Card extends Component {
  //Tên class sẽ là tên thẻ
  render() {//chỉ có 1 phương thức của return đc chạy
    //Nội dung phương thức render sẽ là giao diện của thẻ (Giao diện của component sẽ chứa trong return)
    return (
      <div className="card text-white bg-primary">
        <img className="card-img-top" src="https://picsum.photos/id/20/200/200" alt="Title" />
        <div className="card-body">
          <h4 className="card-title">Tên Sản phẩm</h4>
          <p className="card-text">Nội dung</p>
        </div>
      </div>
    );
  }
}
