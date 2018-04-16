import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';

// ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/* Pass Data to a Component
const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.content}
      <p>footer</p>
    </div>
  );
}

const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
);

ReactDOM.render(<Layout content={template}/>, document.getElementById('app')); */

// Pass Children to Component - Children Prop
const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  );
}

ReactDOM.render((
    <Layout>
      <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
      </div>
    </Layout>
  ),
  document.getElementById('app'));
