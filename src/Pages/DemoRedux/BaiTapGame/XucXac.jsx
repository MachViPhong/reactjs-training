import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {

    datCuoc = (giaTri) =>{//giá trị true, false
        const action = {
            type: 'DAT_CUOC',
            payload: giaTri
        }
        this.props.dispatch(action);
    }
  render() {
    console.log('props', this.props);
    const {arrXucXac} = this.props;
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-4">
            <button className="btn btn-danger mx-5" onClick={()=>{
                this.datCuoc(true);
            }}>
              <div className="bg-danger display-4 p-5">Tài</div>
            </button>
          </div>
          <div className="col-4">
                {arrXucXac.map((xx,index)=>{
                    return <img key={index} src={xx.img} alt="..." width={50} height={50} />
                })}
          </div>
          <div className="col-4">
          <button className="btn btn-danger mx-5" onClick={()=>{
                this.datCuoc(false);
            }}>
              <div className="bg-danger display-4 p-5">Xỉu</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    arrXucXac: state.gameReducer.arrXucXac
});

export default connect(mapStateToProps)(XucXac);
