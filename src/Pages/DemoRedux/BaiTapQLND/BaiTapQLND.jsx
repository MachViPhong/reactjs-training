import React, { Component } from 'react'
import { connect } from 'react-redux'

class BaiTapQLND extends Component {
  render() {
    return (
      <div style={{marginBottom: '300px'}}>
        <hr />
        <h3 className="mt-2">Bài tập quản lý người dùng</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(BaiTapQLND)