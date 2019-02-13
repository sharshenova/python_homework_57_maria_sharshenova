import React from 'react';
import './Alert.css';

const Alert = props => (
	<div>
		<div className={"alert alert-primary" + (props.show ? ' Alert-show' : '')} role="alert">
			<div className="float-left">
				{props.children}
			</div>
			<button type="button" className="close float-right">x</button>
		</div>
	</div>
);

export default Alert;