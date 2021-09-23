/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Component } from "react";

class Cart extends Component {
  render(){
      var {children} = this.props;
    return (
      <div>
            <section className="section">
              <div className="table-responsive">
                <table className="table product-table">
                  <thead>
                    <tr>
                      <th />
                      <th>Sản Phẩm</th>
                      <th>Giá</th>
                      <th>Số Lượng</th>
                      <th>Tổng Cộng</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>

                    {children}

                  </tbody>
                </table>
              </div>
            </section>
      </div>
    );
  }
}

export default Cart;
