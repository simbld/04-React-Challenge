import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Contact = (props) => {
  console.log(props);
  return (
    <div className="friend-item">
      <h3 className="item">{props.name}</h3>
      <h4 className="item">📧{props.email}</h4>
      <h5 className="item">📞{props.phone}</h5>

      <button className="button">Delete</button>
    </div>
  );
};

export const App = (
  // write your HTML code here

  <div className="titre-container">
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <Contact name="Emmanuel" phone="0326489751" email="emma@hotmail.com" />
      <Contact name="Roger" phone="0726489752" email="roger@hotmail.com" />
      <Contact name="Dorian" phone="0626489756" email="dorian@hotmail.com" />
      <Contact name="Clara" phone="0328489757" email="clara@hotmail.com" />
      <Contact name="Frank" phone="0351489759" email="frank@hotmail.com" />
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
