import React, { Component } from "react";
import Article from "./Article";
import CardProduct from "./CardProduct";

export default class DemoProps extends Component {
    data = {
        title: 'Quách Khải dạy cách làm giàu',
        content: 'Sinh ra đúng chỗ',
    }
    render() {
        return (
            <div className="container">
                <h3>Product list</h3>
                <div className="row">
                    <div className="col-4">
                        <CardProduct id="1" name="iphone 10" price="1000" />
                    </div>
                    <div className="col-4">
                        <CardProduct id="2" name="iphone 14" price="3000" />
                    </div>
                </div>
                <hr />
                <h3>Blog</h3>
            <Article data={this.data} button={<button>Detail</button>}/>
            </div>
        );
    }
}
