import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Demo from "./components/Demo";
import DemoLogin from "./State/DemoLogin";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import DataBinding from "./databinding/DataBinding";
import HandleEvent from "./handleEvent/HandleEvent";
//import css: Ảnh hưởng toàn bộ ứng dụng
import "./index.scss";
import TangGiamFontSize from "./State/TangGiamFontSize/TangGiamFontSize";
import DemoProps from "./props/DemoProps/DemoProps";
import BaiTapShop from "./props/BaiTapShop/BaiTapShop";
import BaiTapXemChiTiet from "./props/BaiTapXemChiTiet/BaiTapXemChiTiet";

//Cấu hình react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import HomeTemplate from "./templates/HomeTemplate";
import Page404 from "./Pages/Page404/Page404";
import BaiTapGioHang from "./Pages/BaiTapGioHang/BaiTapGioHang";
import ReactForm from "./Pages/Form/ReactForm";
import ReactLifeCycle from "./Pages/ReactLifeCycle/ReactLifeCycle";
import DemoRedux from "./Pages/DemoRedux/DemoRedux";

//Cấu hình redux store
import { Provider } from "react-redux";
import { store } from "./redux/ConfigStore";
import BaiTapGame from "./Pages/DemoRedux/BaiTapGame/BaiTapGame";
import UseStateDemo from "./HookDemo/UseStateDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX
root.render(
  // <div className="bg-dark text-white p-5">Hello cybersoft</div>
  <>
    {/* <HandleEvent/> */}
    {/* <DemoLogin/> */}
    {/* <TangGiamFontSize/> */}
    {/* <DemoProps/> */}
    {/* <BaiTapShop/> */}
    {/* <BaiTapXemChiTiet/> */}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/*Tạo path rỗng để người dùng vào localhost:3000*/}
          <Route path="" element={<HomeTemplate />}>
            {/* Trang chủ mặc định là index <=> Outlet của HomeTemplate*/}
            <Route index element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="btgiohang" element={<BaiTapGioHang />}></Route>
            <Route path="form" element={<ReactForm />}></Route>
            <Route path="reactlifecycle" element={<ReactLifeCycle />}></Route>
            <Route path="redux" element={<DemoRedux />}></Route>
            <Route path="demogame" element={<BaiTapGame />}></Route>
            <Route path="demo-usestate" element={<UseStateDemo />}></Route>
            {/* <Route path='*' element={<Page404 />}></Route> */}
            {/* Nếu bấm đường dẫn không tồn tại thì chuyển thẳng về trang home */}
            <Route path="*" element={<Navigate to="" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
