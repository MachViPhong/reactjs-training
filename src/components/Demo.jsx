import React, { Component } from "react";

export default class Demo extends Component {
  //Lệnh return sẽ chứa giao diện của component
  //Lưu ý: nội dung của component phải được bao phủ bởi 1 thẻ
  //<> </>: Thẻ fragment thẻ vô hình
  render() {
    return (
      <>
        <button className="btn btn-success mx-2">button</button>
        <button className="btn btn-danger mx-2">button</button>
      </>
    );
  }
}
