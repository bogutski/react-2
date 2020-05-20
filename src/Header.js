import React from 'react';
import MenuItem from './MenuItem';

function Header(props) {
  return (
    <div className='app-header'>
      This is Header {props.version}

      <ul>
        <li key='1qwe'>{props.menu[0]}</li>
        <li key='2rew'>{props.menu[1]}</li>
        <li key='1wer'>{props.menu[2]}</li>
      </ul>

      <hr />

      <ul>
        {props.menu.map(el => <MenuItem key={el} item={el} /> ) }
      </ul>


    </div>
  );
}

export default Header;
