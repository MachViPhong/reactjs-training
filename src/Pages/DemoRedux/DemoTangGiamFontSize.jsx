import React, { Component } from "react";
import { connect } from "react-redux";

//snippet nhanh rcredux
class DemoTangGiamFontSize extends Component {
  render() {
    return (
      <div>
        <h3>Ví dụ 1: Tăng giảm font size</h3>
        <p style={{ fontSize: this.props.fSize }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          cumque mollitia commodi dolores iure voluptatibus ratione odio
          officiis. Facilis enim velit beatae quae voluptatem, labore tempore
          similique. Dignissimos, architecto iusto?
        </p>
        {/* <img src={this.props.imgState} alt="..." /> */}
        <button className="btn btn-success mx-2" onClick={()=>{
            //Tạo nút xử lý => tạo object action
            const action ={
                type: 'TANG_GIAM_FONT_SIZE',
                payload: 1,
                //Gửi dữ liệu lên redux = this.props.dispatch
            }
            this.props.dispatch(action);
        }}> + </button>
        <button className="btn btn-success mx-2" onClick={()=>{
            //Tạo nút xử lý => tạo object action
            const action ={
                type: 'TANG_GIAM_FONT_SIZE',
                payload: -1,
                //Gửi dữ liệu lên redux = this.props.dispatch
            }
            this.props.dispatch(action);
        }}> - </button>
      </div>
    );
  }
}

//Định nghĩa 1 hàm lấy dữ liệu redux trả về
// const mapStateToProps = (state) =>{ //state === reducer
//     //Lấy dữ liệu của redux để biến thành props của component
//     return {
//         fSize: state.fontSizeState,
//         imgState: state.imgState
//     }
// }

// {return} <=> ()
const mapStateToProps = (state) => ({ //state: rootstate
  //state === reducer
  //Lấy dữ liệu của redux để biến thành props của component
  fSize: state.fontSizeState,//this.props
  imgState: state.imgState,
});

//cách 2:
// const mapDispatchToProps = (dispatch) =>{}

//Kết nối react với redux => tạo ra component mới có chứa dữ liệu của redux và giao diện của component đó

const DemoFontSizeRedux = connect(mapStateToProps)(DemoTangGiamFontSize);

export default DemoFontSizeRedux;
// function main() {
//   return function () {
//     console.log(123);
//   }; //primitive value, reference value (object), function
// }
// main() === return function(){console.log(123)}
// main()() === console.log(123)
