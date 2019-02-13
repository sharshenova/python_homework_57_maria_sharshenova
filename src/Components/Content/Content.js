import React from 'react';
import Button from '../UI/Button/Button';

function Content (props) {
    return <div className="Content">
        <h1 class='mt-3'>Some title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
          <li>Point 4</li>
          <li>Point 5</li>
        </ul>
        <p>Order now and get 20% discount!</p>
        <Button btnType='Success' clicked={props.purchaseStart}>ORDER</Button>
    </div>
}


export default Content;