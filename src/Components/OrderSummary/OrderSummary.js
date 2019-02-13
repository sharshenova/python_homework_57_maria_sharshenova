import React from 'react';
import Button from '../UI/Button/Button';


const OrderSummary = props => {

    return (
        <div>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <p><strong>Total Price: 10000 KGS</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
        </div>
    )
};


export default OrderSummary;