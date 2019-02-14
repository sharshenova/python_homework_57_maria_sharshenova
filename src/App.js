import React, { Component } from 'react';
import Modal from "./Components/UI/Modal/Modal";
import Content from "./Components/Content/Content";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import Alert from "./Components/UI/Alert/Alert";
import './App.css';

class App extends Component {

  state = {
    purchasing: false,
    dismiss: undefined,
    alertIsHidden: false
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

  hideAlert = () => {
      this.setState({alertIsHidden: true});
      console.log('hideAlert');
  }


  render = () => {

    let buttons = [
      {btnType: 'Danger', label: 'CLOSE', clicked: this.cancelHandler},
      {btnType: 'Success', label: 'CONTINUE', clicked: this.successHandler}
    ]

    let alerts = [
      {alertType: 'alert-primary', dismiss: true, text: 'This is a primary type alert'},
      {alertType: 'alert-success', dismiss: true, text: 'This is a success type alert'},
      {alertType: 'alert-danger', dismiss: false, text: 'This is a danger type alert'},
      {alertType: 'alert-warning', dismiss: false, text: 'This is a warning type alert'},
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
        <Alert
          alert={alerts[1]}
          clicked={this.hideAlert}
          alertIsHidden={this.state.alertIsHidden}
        >
        </Alert>
      </div>
    );
  };
};

export default App;

