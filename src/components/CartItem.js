/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Component } from "react";
import * as Message from './../constants/Message'

class CartItem extends Component {
  render(){
    var {item} = this.props;
    return (
                 <tr>
                      <th scope="row">
                        <img src={item.product.image} className="img-fluid z-depth-0" alt={item.product.name} />
                      </th>
                      <td>
                        <h5>
                          <strong>{item.product.name}</strong>
                        </h5>
                      </td>
                      <td>{item.product.price.toLocaleString('vi-VN')} VNĐ</td>
                      <td className="center-on-small-only">
                        <span className="qty">{item.quantity} </span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                          <label 
                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                            onClick = {() => this.onUpdateQuantity(item.product, item.quantity - 1)}       
                          >
                            <a>—</a>
                          </label>
                          <label 
                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                            onClick = {() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                          >
                            <a>+</a>
                          </label>
                        </div>
                      </td>
                      <td>{this.showSubTotal(item.product.price, item.quantity)} VNĐ</td>
                      <td>
                        <button 
                            type="button" 
                            className="btn btn-sm btn-primary waves-effect waves-light" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            data-original-title="Remove item"
                            onClick = {() => this.onDelete(item.product)}
                          >
                          X
                        </button>
                      </td>
                    </tr>
    );
  }
  onUpdateQuantity = (product, quantity) => {
    if(quantity > 0){
      var {onUpdateProductInCart, onChangeMessage} = this.props
      onUpdateProductInCart(product, quantity);
      onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
  }
  onDelete(product){
    var {onDeleteProductInCart} = this.props;
    onDeleteProductInCart(product);
    this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }
  showSubTotal = (price, quantity) =>{return (price * quantity).toLocaleString('vi-VN')}
}

export default CartItem;
