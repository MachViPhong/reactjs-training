import React, { Component } from 'react'
import SanPham from './SanPham'

const dataPhone = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
  ]
export default class DanhSachSanPham extends Component {
    renderPhone = () =>{
        const {themGioHang} = this.props;
        return dataPhone.map((phoneOb, index) =>{
            return <div className="col-4" key={index}>
            <SanPham phone={phoneOb} themGioHang={themGioHang}/>
        </div>
        })
    }
  render() {
    return (
      <div className='row'>
        {this.renderPhone()}
        {/* <div className="col-4">
            <SanPham/>
        </div>
        <div className="col-4">
            <SanPham/>
        </div>
        <div className="col-4">
            <SanPham/>
        </div> */}
      </div>
    )
  }
}
