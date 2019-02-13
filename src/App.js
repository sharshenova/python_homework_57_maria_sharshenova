import React, { Component } from 'react';
import Modal from "./Components/UI/Modal/Modal";
import Content from "./Components/Content/Content";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import './App.css';

class App extends Component {

  state = {
    purchasing: false
    // buttons: [
    //   {btnType: 'Danger', label: 'CLOSE', clicked: this.cancelHandler},
    //   {btnType: 'Success', label: 'CONTINUE', clicked: this.successHandler}
    // ]
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
        <Modal
          show={this.state.purchasing}
          close={this.cancelHandler}
          purchaseContinue={this.successHandler}
          purchaseCancel={this.cancelHandler}
          title="Some kinda modal title"
        >
          <OrderSummary/>
        </Modal>
      </div>
    );
  }
}

export default App;
