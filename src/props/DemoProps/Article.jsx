import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    let {title, content} = this.props.data;
    let {button} = this.props;
    /*
        Khác biệt giữa state và props
        + Giống nhau: đều là thuộc tính có sẵn của react class component dùng để binding dữ liệu lên giao diện
        + Khác nhau: s
            - tate sẽ quản lý giá trị thay đổi trên component và có thể set lại được giá trị mới được thông qua phương thức setState.
            - Props thì dùng để nhận dữ liệu từ component cha truyền vào và không thể gán lại giá trị mới được.
    */
    return (
      <div className='card'>
        <h3 className='card-header'>{title}</h3>
        <p className='card-body'>{content}</p>
        {button}
      </div>
    )
  }
}
