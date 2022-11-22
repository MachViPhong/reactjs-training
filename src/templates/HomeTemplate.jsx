import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <header className="bg-dark text-white p-2 nav">
          {/* a: href
                    NavLink: to
                    => NavLink chỉ load lại phần outlet, giúp truy cập nhanh hơn ở các lần truy cập sau => tối ưu cho việc render giao diện
                    */}
          {/* <NavLink to="/home" className="nav-link text-white">Home</NavLink> */}
          {/* <NavLink to="/register" className="nav-link text-white">Register</NavLink>
                    <NavLink to="/login" className="nav-link ">Login</NavLink> */}
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link bg-white text-dark" : "nav-link text-white"
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link bg-white text-dark" : "nav-link text-white"
            }
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link bg-white text-dark" : "nav-link text-white"
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link bg-white text-dark" : "nav-link text-white"
            }
            to="/btgiohang"
          >
            <i className="fa fa-cart-plus"></i>
            BT giỏ hàng
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link bg-white text-dark" : "nav-link text-white"
            }
            to="/form"
          >
            Form
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link bg-white text-dark" : "nav-link text-white"
            }
            to="/reactlifecycle"
          >
            reactlifecycle
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link bg-white text-dark" : "nav-link text-white"
            }
            to="/redux"
          >
            redux
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link bg-white text-dark" : "nav-link text-white"
            }
            to="/demogame"
          >
            Game
          </NavLink>
          {/* <NavLink className={({ isActive }) => isActive ? 'nav-link bg-white text-dark' : 'nav-link text-white'} to='/demo-usestate'>useState</NavLink> */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hooks
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" to="/demo-usestate">
                  Use State
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
        <div className="content" style={{ minHeight: "75vh" }}>
          <Outlet />
        </div>
        <header className="bg-dark text-white p-5">Footer</header>
      </div>
    );
  }
}

// function main ({id, isActive}){
//     let {id, isActive} = props
// }
