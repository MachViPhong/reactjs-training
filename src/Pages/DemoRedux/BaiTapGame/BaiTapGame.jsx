import React, { Component } from "react";
import { connect } from "react-redux";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import '../../../assets/css/BaiTapGame.css'
class BaiTapGame extends Component {
  render() {
    return (
      <div className='bg-game'>
        <h3 className="text-center display-4 pt-2">Bài tập game xúc xắc</h3>
        <XucXac />
        <KetQuaTroChoi/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BaiTapGame);
