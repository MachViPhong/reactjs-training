import React, { Component } from "react";
import TableProduct from "./TableProduct";
import axios from 'axios'
export default class ReactForm extends Component {
  state = {
    formValue: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
      productType: "phone",
    },
    formError: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
    },
    valid: false,
    arrProduct: [
      {
        id: "1",
        name: "iphone X",
        price: 1000,
        image: "https://i.pravatar.cc?u=1",
        productType: "phone",
        description: "product 1",
      },
      {
        id: "2",
        name: "iphone Xs",
        price: 2000,
        image: "https://i.pravatar.cc?u=2",
        productType: "tablet",
        description: "product 2",
      },
    ],
  };

  handbleUpdateProduct = () => {
    console.log("abc");
    //Tìm ra sản phẩm chứa mã tương đương formValue.id
    let { arrProduct, formValue } = this.state;
    let prodUpdate = arrProduct.find((prod) => prod.id === formValue.id);

    if (prodUpdate) {
      for (let key in prodUpdate) {
        if (key !== "id") {
          prodUpdate[key] = formValue[key];
        }
      }
    }

    //Cập nhật lại state sau khi chỉnh sửa
    this.setState({
        arrProduct: arrProduct,
      });
  };

  handleEditProduct = (prodClick) => {
    //Click vào product nào thì state của formValue sẽ thay đổi giá trị thành product đó
    this.setState(
      {
        formValue: prodClick,
      },
      () => {
        this.setState({
          valid: this.checkFormValid(),
        });
      }
    );
  };
  checkFormValid = () => {
    // return về true (false) : true khi form hợp lệ, false khi không hợp lệ

    /*
            form hợp lệ khi: các trường formError = rỗng, và các trường value tương ứng phải khác rỗng
        */

    let { formValue, formError } = this.state;
    for (let key in formError) {
      if (formError[key] !== "" || formValue[key] === "") {
        return false;
      }
    }
    return true;
  };

  handleSubmit = (e) => {
    //Ngăn sự kiện reload browser
    e.preventDefault();
    if (!this.checkFormValid()) {
      alert("form is invalid!");
      return; //Nếu form không hợp lệ => không submit
    }

    //Thêm sản phẩm vào arrProduct => cập nhật state arrProduct
    let arrProduct = this.state.arrProduct;
    let newProduct = { ...this.state.formValue };
    arrProduct.push(newProduct);

    this.setState({
      arrProduct: arrProduct,
    });
    console.log("submit", this.state.formValue);
  };

  handleDeleteProduct = (idClick) => {
    //Lấy ra các sản phẩm có mã khác sản phẩm mình xoá
    let arrProduct = this.state.arrProduct.filter(
      (prod) => prod.id !== idClick
    );

    //cập nhật lại state
    this.setState({
      arrProduct: arrProduct,
    });
  };

  handleChangeInput = (e) => {
    /*
            Trên 1 thẻ html sẽ có 2 dạng thuộc tính properties: là các thuộc tính có sẵn của thẻ như là id, className, name, value, style,...
            attribute (thuộc tính mở rộng: do mình thêm vào -> không thể dùng dom.thuocTinh => dom.getAttribute['tenAttribute']);

        */
    /*
        let value = e.target.value; //e.target === onInput //tablet
        let name = e.target.name; //productType
        */
    let { value, name } = e.target;
    let dataType = e.target.getAttribute("data-type");
    let dataMaxLength = e.target.getAttribute("data-max-length");
    //lấy object formvalue ra xử lý riêng
    let newFormValue = this.state.formValue;
    //dynamic key, truyền động giá trị trường thuộc tính vào object
    newFormValue[name] = value;

    //Xử lý lỗi cho formError
    let newFormError = this.state.formError;
    let message = "";
    if (value.trim() === "") {
      message = name + " cannot be blank !";
    } else {
      if (dataType === "number") {
        let regexNumber = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
        if (!regexNumber.test(value)) {
          message = name + " is invalid!";
        }
      }
      if (value.length > dataMaxLength && dataMaxLength !== null) {
        message = name + ` no more than ${dataMaxLength} character!`;
      }
    }
    newFormError[name] = message;
    //setState
    this.setState(
      {
        formValue: newFormValue,
        formError: newFormError,
      },
      () => {
        // console.log(this.state);
        //Gọi sau khi check lỗi mỗi lần cập nhật value và error từ người dùng nhập
        this.setState({
          valid: this.checkFormValid(),
        });
      }
    );
    console.log(name, value);
    console.log(this.state.valid);
  };
  render() {
    let { formValue } = this.state;
    return (
      <>
        <form className="container" onSubmit={this.handleSubmit}>
          <h3>Create product</h3>
          <div className="card-header">Product info</div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Id</p>
                  <input
                    value={formValue.id}
                    data-max-length="6"
                    name="id"
                    className="form-control"
                    onInput={this.handleChangeInput}
                  />
                  {/* {this.state.formError.id ?
                                    <div className="alert alert-danger mt-2">id is invalid</div> : ''

                                } */}
                  {this.state.formError.id && (
                    <div className="alert alert-danger mt-2">
                      {this.state.formError.id}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <p>Name</p>
                  <input
                    value={formValue.name}
                    name="name"
                    className="form-control"
                    onInput={this.handleChangeInput}
                  />
                  {this.state.formError.name && (
                    <div className="alert alert-danger mt-2">
                      {this.state.formError.name}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <p>Price</p>
                  <input
                    value={formValue.price}
                    data-type="number"
                    name="price"
                    className="form-control"
                    onInput={this.handleChangeInput}
                  />
                  {this.state.formError.price && (
                    <div className="alert alert-danger mt-2">
                      {this.state.formError.price}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>image</p>
                  <input
                    value={formValue.image}
                    name="image"
                    className="form-control"
                    onInput={this.handleChangeInput}
                  />
                  {this.state.formError.image && (
                    <div className="alert alert-danger mt-2">
                      {this.state.formError.image}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <p>productType</p>
                  <select
                    value={formValue.productType}
                    name="productType"
                    className="form-control"
                    onInput={this.handleChangeInput}
                  >
                    <option value="phone">phone</option>
                    <option value="tablet">tablet</option>
                    <option value="laptop">laptop</option>
                  </select>
                </div>
                <div className="form-group">
                  <p>description</p>
                  <input
                    value={formValue.description}
                    className="form-control"
                    name="description"
                    onInput={this.handleChangeInput}
                  />
                  {this.state.formError.description && (
                    <div className="alert alert-danger mt-2">
                      {this.state.formError.description}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              type="submit"
              className="btn btn-success m-2"
              disabled={!this.state.valid}
            >
              Create
            </button>
            <button
              type="button"
              className="btn btn-primary m-2"
              disabled={!this.state.valid}
              onClick={() => {
                this.handbleUpdateProduct()
              }}
            >
              Update
            </button>
          </div>
        </form>
        <div className="container mt-2">
          <TableProduct
            arrProduct={this.state.arrProduct}
            handleDeleteProduct={this.handleDeleteProduct}
            handleEditProduct={this.handleEditProduct}
          />
        </div>
      </>
    );
  }

  componentDidMount(){
    //Gọi api sau khi render thực thi xong (tại sao gọi ở didmount chỉ chạy 1 lần duy nhất sai khi render)

    let promise = axios({
      url: 'https://svcy.myclass.vn/api/Product/GetAll',
      method: 'GET',
    });

    promise.then(result => {
      //renderTableSinhVien(); => thay đổi state
      this.setState({
        arrProduct: result.data
      })
    })
  }
}
