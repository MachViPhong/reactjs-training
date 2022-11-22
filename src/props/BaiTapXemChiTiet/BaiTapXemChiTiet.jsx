import React, { Component } from 'react'
import PhoneCard from './PhoneCard';

const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
];
export default class BaiTapXemChiTiet extends Component {

    state = {
        spChiTiet: { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    }
    renderPhone = () => {
        return data.map((item, index) => {
            return (<div key={index} className='col-4 mt-2'>
                <PhoneCard sp={item} xemChiTiet ={this.xemChiTiet}/>
                {/* truyền props dưới dạng callback function */}
                {/* <div className="card">
                    <img src={item.hinhAnh} alt="..." />
                    <div className="card-body">
                        <div className="row">
                            <h3>{item.tenSP}</h3>
                            <p>{item.giaBan}</p>

                        </div>
                        <button className="btn btn-dark" onClick={() => { this.xemChiTiet(item) }}>View detail</button>
                    </div>
                </div> */}
            </div>)
        })
    }

    xemChiTiet = (phoneClick) => {
        // console.log(phoneClick)
        this.setState({
            spChiTiet: phoneClick
        })
    }
    render() {
        const { maSp, tenSP, hinhAnh, cameraTruoc, cameraSau, giaBan, heDieuHanh, manHinh, ram, rom } = this.state.spChiTiet;
        return (
            <div className='container'>
                <h3>Product list</h3>
                <div className="row">
                    {this.renderPhone()}
                    {/* <div className="col-4 mt-2">
                        <div className="card">
                            <img src="./img/vsphone.jpg" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                <h3>Phone 1</h3>
                                <p>3000</p>

                                </div>
                                <button className="btn btn-dark">View detail</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mt-2">
                        <div className="card">
                            <img src="./img/vsphone.jpg" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                <h3>Phone 1</h3>
                                <p>3000</p>

                                </div>
                                <button className="btn btn-dark">View detail</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mt-2">
                        <div className="card">
                            <img src="./img/vsphone.jpg" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                <h3>Phone 1</h3>
                                <p>3000</p>

                                </div>
                                <button className="btn btn-dark">View detail</button>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="mt-2">
                    <div className="row">
                        <div className="col-4">
                            <h3>{tenSP}</h3>
                            <img src={hinhAnh} alt="..." height={450} style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="col-8">
                            <h3>Product detail</h3>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>Ram</td>
                                        <td>{ram}</td>
                                    </tr>
                                    <tr>
                                        <td>Rom</td>
                                        <td>{rom}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
