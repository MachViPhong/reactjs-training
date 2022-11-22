import React, { Component } from 'react'

export default class PhoneCard extends Component {
    render() {
        const {sp, xemChiTiet} = this.props;
        return (
            <div className="card">
                <img className='w-100' height={450} style={{objectFit:'cover'}} src={sp.hinhAnh} alt="..." />
                <div className="card-body">
                    <div className="row">
                        <h3>{sp.tenSP}</h3>
                        <p>{sp.giaBan}</p>

                    </div>
                    <button className="btn btn-dark" onClick={() => {xemChiTiet(sp)}}>View detail</button>
                </div>
            </div>
        )
    }
}
