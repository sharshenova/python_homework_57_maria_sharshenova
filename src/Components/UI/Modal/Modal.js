import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import Button from '../Button/Button';

const Modal = props => (
	<div>
		<Backdrop show={props.show} close={props.close}/>
		<div className={"Modal" + (props.show ? ' Modal-show' : '')} role="dialog">
			<div className="modal-header">
				<h5 className="modal-title">{props.title}</h5>
			</div>
			<div className="modal-body">
				{props.children}
			</div>
			<div className="modal-footer">
				{props.buttons.map(button =>
					<Button 
						btnType={button.btnType} 
						clicked={button.clicked}
						key={button.label}
					>{button.label}</Button>
				)}
			</div>
		</div>
	</div>
);

export default Modal;


// <Button btnType='Danger' clicked={props.purchaseCancel}>CLOSE</Button>
// <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>


