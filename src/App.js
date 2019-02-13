import React, { Component } from 'react';
import Modal from "./Components/UI/Modal/Modal";
import Content from "./Components/Content/Content";
import AlertText from "./Components/AlertText/AlertText";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import Alert from "./Components/UI/Alert/Alert";
import './App.css';

class App extends Component {

  state = {
    purchasing: false,
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


  render = () => {

    let buttons = [
      {btnType: 'Danger', label: 'CLOSE', clicked: this.cancelHandler},
      {btnType: 'Success', label: 'CONTINUE', clicked: this.successHandler}
    ]

    return (
      <div className="Container">
        <Content purchaseStart={this.purchaseHandler}/>
        <Modal
          show={this.state.purchasing}
          close={this.cancelHandler}
          buttons={buttons}
          title="Some kinda modal title"
        >
          <OrderSummary/>
        </Modal>
        <Alert>
          <AlertText/>
        </Alert>
      </div>
    );
  };
};

export default App;
