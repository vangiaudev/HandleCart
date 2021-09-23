/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Component } from "react";
import CartContainer from "./containers/CartContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MessageContainer from "./containers/MessageContainer";
import ProductsContainer from "./containers/ProductsContainer";
// import { MDBBtn } from 'mdb-react-ui-kit';

class App extends Component {
  render(){
    return (
      <div>
        <Header/>
        <main id="mainContainer">
          <div className="container">
    
            <ProductsContainer/>
            <MessageContainer/>
            <CartContainer/>
            
          </div>
        </main>
    
        <Footer/>
      </div>
    );
  }
}

export default App;
