import React, { Component } from 'react'

export default class CardProduct extends Component {
  render() {
    // this.props: thuộc tính có sẵn của react class component, 
    // dùng để nhận các giá trị từ component cha truyền vào. và không thẻ gán lại giá trị ở component con {read only}

    const {id, name, price} = this.props;//destructuring
    // let name = this.props.name;
    // let price = this.props.price;
    return (
      <div className='card'>
        <img src={`https://i.pravatar.cc?u=${id}`} alt="..." />
        <div className="card-body">
            <h3>{name}</h3>
            <p>{price}</p>
            <button className="btn btn-dark">Add to cart</button>
        </div>
      </div>
    )
  }
}
