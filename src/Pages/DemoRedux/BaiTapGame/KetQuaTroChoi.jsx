import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  hienThiTongDiem = () => {
    let { arrXucXac } = this.props;
    let tongDiem = 0;
    let ketQua = "Tài";
    for (let xx of arrXucXac) {
      tongDiem += xx.diem;
    }
    if (tongDiem < 11) {
      ketQua = "Xỉu";
    }

    //string
    return `${tongDiem} - ${ketQua}`;
  };
  render() {
    const { giaTriCuoc, tongSoBanChoi, tongSoBanThang } = this.props;
    return (
      <div className="text-center pt-5">
        <div className="display-4">Tổng điểm: {this.hienThiTongDiem()}</div>
        <div className="display-4">
          Bạn cược :{" "}
          <span className="text-success">{giaTriCuoc ? "Tài" : "Xỉu"}</span>
        </div>
        <div className="display-4">
          Số bàn thắng : <span className="text-primary">{tongSoBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi :{" "}
          <span className="text-warning">{tongSoBanChoi}</span>
        </div>
        <div className="display-4">
          <button
            className="btn btn-success p-2"
            onClick={() => {
              const action = {
                type: "PLAY_GAME",
              };
              this.props.dispatch(action);
            }}
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tongSoBanThang: state.gameReducer.tongSoBanThang,
  tongSoBanChoi: state.gameReducer.tongSoBanChoi,
  giaTriCuoc: state.gameReducer.giaTriCuoc,
  arrXucXac: state.gameReducer.arrXucXac,
});

export default connect(mapStateToProps)(KetQuaTroChoi);
