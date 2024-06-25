import React from 'react';
import ReactDOM from 'react-dom';

const HelloMessage: React.FC = () => {
  return <div>Hello World</div>;
};

class CustomElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    ReactDOM.render(<HelloMessage />, mountPoint);
  }
}

export default CustomElement;
