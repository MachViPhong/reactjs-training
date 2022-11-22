import React, { Component } from 'react'

export default class TableProduct extends Component {
    render() {
        const { arrProduct, handleDeleteProduct, handleEditProduct} = this.props;
        return (
            <table className='table'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>productType</th>
                        <th>description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>image</td>
                        <td>price</td>
                        <td>productType</td>
                        <td>description</td>
                        <td>
                            <button className='btn btn-danger'>
                                <i className='fa fa-trash'></i>
                            </button>
                            <button className='btn btn-primary mx-2'>
                                <i className='fa fa-edit'></i>
                            </button>
                        </td>
                    </tr> */}
                    {arrProduct.map(({ id, name, price, image, productType, description }, index) => {
                        return <tr key={index}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>
                                <img src={image} alt="..." width={50} height={50} />
                            </td>
                            <td>{price}</td>
                            <td>{productType}</td>
                            <td>{description}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => {handleDeleteProduct(id)}}>
                                    <i className='fa fa-trash'></i>
                                </button>
                                <button className='btn btn-primary mx-2' onClick={() => {
                                    let prodEdit = { id, name, price, image, productType, description };
                                    handleEditProduct(prodEdit)}}>
                                    <i className='fa fa-edit'></i>
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}
