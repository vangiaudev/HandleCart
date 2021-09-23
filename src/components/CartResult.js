/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Component } from "react";
// import { MDBBtn } from 'mdb-react-ui-kit';

class CartResult extends Component {
  render(){
    var {cart} = this.props;
    return (
        
                    <tr>
                      <td colSpan={3} />
                      <td>
                        <h4>
                          <strong>Tổng Tiền</strong>
                        </h4>
                      </td>
                      <td>
                        <h4>
                          <strong>{this.showTotalPayment(cart)}</strong>
                        </h4>
                      </td>
                      <td colSpan={3}>
                        <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                          <i className="fa fa-angle-right right" />
                        </button>
                      </td>
                    </tr>
    );
  }
  showTotalPayment = (cart) =>{
      var total = 0;
      if(cart.length > 0){
          for(var i = 0; i<cart.length; i++){
              total += cart[i].product.price * cart[i].quantity;
          }
      }
      return total.toLocaleString('vi-VN') + ' VNĐ';
  }
}

export default CartResult;
