import React from 'react';
import './Alert.css';

const Alert = props => (
	<div>
		{!props.alertIsHidden ?
			(<div className={['alert', props.alert.alertType].join(' ')} role="alert">
				<div className="float-left">
					{props.alert.text}
				</div>
				{props.alert.dismiss ? <button onClick={props.clicked} type="button" className="close float-right">x</button> : <div></div>}			
			</div>) : <div></div>
		}
	</div>
);

export default Alert;