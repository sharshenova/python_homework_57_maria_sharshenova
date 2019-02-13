import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import Button from '../Button/Button';

const Modal = props => (
	<div>
		<Backdrop show={props.show} close={props.close}/>
		<div className={"Modal" + (props.show ? ' Modal-show' : '')} role="dialog">
			<div class="modal-header">
				<h5 class="modal-title">{props.title}</h5>
			</div>
			<div class="modal-body">
				{props.children}
			</div>
			<div class="modal-footer">
				<Button btnType='Danger' clicked={props.purchaseCancel}>CLOSE</Button>
				<Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
				
			</div>
		</div>
	</div>
);

export default Modal;




