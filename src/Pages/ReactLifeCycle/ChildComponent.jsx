import { warning } from '@remix-run/router';
import React, { Component } from 'react'


/*
    PureComponent: là 1 class giống hệt component tuy nhiên không lifecycle shouldComponentUpdate vì PureComponent đã tự xử lý so sánh props có thay đổi hay không giúp mình rồi (nếu thay đổi thì render không thay đổi thì không render). Tuy nhiên sự so sánh này chỉ xảy ra đối với props là primitive value (number, string, boolean, null, undefined) shadow compare. Đối với props là reference value (object, array,...) thì cần phải xử lý clone ra trước khi thay đổi state.
*/
export default class ChildComponent extends Component {
    constructor(props){
        super(props);
        console.log('constructor child');
        this.state = {

        }
    }
    static getDerivedStateFromProps(newProps,currentState){
        //Hàm này dùng để xử lý state trước khi render ra giao diện
        console.log('getDerivedStateFromProps child');
        return null; //return null là state giữ nguyên
    }

    shouldComponentUpdate(newProps,newState) {
        //true: thì component chạy tiếp updating
        //false: dừng trước khi render lại luôn - kết thúc hàm thì dừng luôn
        // mục đích giúp tối ưu performance giúp k cần render lại child
        //this.props là props trước khi thay đổi
        //newProps là props sau khi thay đổi

        console.log('this.props: ',this.props);
        console.log('new props: ',newProps);

        if(this.props.like === newProps.like){
            return false;
        }
        console.log('shouldComponentUpdate child');
        return true;
    }
  render() {
    //ở đây this.props và newProps là như nhau
    const {obLike} = this.props;
    console.log('render child')
    return (
      <div className='container'>
        <div className="bg-dark text-white p-5">
            <p>like: {obLike.like}</p>
        </div>
      </div>
    )
  }

  componentDidMount(){
    console.log('componentDidMount child')
  }

  componentDidUpdate() {
    //Tương tự didMount (chạy sau render tuy nhiên sẽ chạy mỗi khi bất kì state nào trên component này thay đổi). Lưu ý: khi setSate trong component thì phải có if (bắt buộc)
    // this.setState({

    // })
  }
}
