import React, { Component } from 'react';
import Modal from "./Components/UI/Modal/Modal";
import Content from "./Components/Content/Content";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import './App.css';

class App extends Component {

  state = {
    purchasing: false
  };

  purchaseHandler = () => {
      this.setState({purchasing: true});
  };

  cancelHandler = () => {
      this.setState({purchasing: false});
  };

  successHandler = () => {
      alert('You decided to continue!');
      this.cancelHandler();
  };


  render() {
    return (
      <div className="Container">
        <Content purchaseStart={this.purchaseHandler}/>
        <Modal show={this.state.purchasing} cancel={this.cancelHandler}>
          <OrderSummary
            purchaseContinue={this.successHandler}
            purchaseCancel={this.cancelHandler}
          />
        </Modal>
      </div>
    );
  }
}

export default App;
