import React, { Component } from "react";
import style from "./DemoLogin.module.css";

export default class DemoLogin extends Component {
  state = {
    //this.state là thuộc tính có sẵn của react class component, chứa các giá trị thay đổi trên giao diện
    login: false, //false chưa đăng nhập
  };
  username = "QuangKhai";
  //Nội dung dài
  renderLogin = () => {
    if (this.state.login) {
      return (
        <>
          <span className="nav-link text-white">Hello! {this.username}</span>
          <a
            className="nav-link active"
            href="#"
            aria-current="page"
            onClick={() => {
              this.handleLogout();
            }}
          >
            Đăng xuất
          </a>
        </>
      );
    }
    return (
      <>
        <span className="nav-link text-white">Goodbye! {this.username}</span>

        <a
          className="nav-link active"
          href="#"
          aria-current="page"
          onClick={() => {
            //Gọi hàm login
            this.handleLogin();
          }}
        >
          Đăng nhập
        </a>
      </>
    );
  };

  handleLogin = async () => {
    console.log("handle login");
    // this.state.login = true;
    // this.setState là phương thức có sẵn của react class component,
    /*
        + Thay đổi giá trị this.state
        + Xử lý render lại giao diện với giá trị state mới
        + Hàm this.setState là 1 hàm bất đồng bộ
        + Hàm sertState có thêm tham số callBack
    */
    //   await this.setState({
    //     login: true,
    //   });
    //   // this.render();
    //   console.log(this.state)
    // };

    await this.setState(
      {
        login: true,
      },
      () => {
        //Tham số callback function của hàm setState sẽ tự động kích hoạt sau khi state thay đổi và giao diện render lại
        console.log(this.state);
      }
    );
    // this.render();
  };
  handleLogout = () => {
    console.log("handle logout");

    this.setState(
      {
        login: false,
      },
      () => {
        console.log(this.state);
      }
    );
    // this.render();
  };
  render() {
    //bs5-nav-a
    return (
      <>
        <nav class="nav justify-content-end bg-dark text-white  ">
          {/* {this.login?<span className='nav-link'>Hello! {this.username}</span>:<a  className='nav-link active' href='#' aria-current="page">Đăng nhập</a>}
        nội dung ngắn */}
          {this.renderLogin()}
        </nav>

        <p className={`${style["bg-orange"]} p-5 text-dark`}>hello world</p>

        <span style={{
          
        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloribus laudantium optio, quisquam corporis, alias, tempora laborum laboriosam sapiente non nihil possimus officia? Eum ea quos maiores sint labore perspiciatis.</span>
      </>
    );
  }
}
