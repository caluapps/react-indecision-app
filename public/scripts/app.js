'use strict';

console.log('App.js is running!');

var app = {
  title: 'Title',
  subtitle: 'Some subtitles',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  /* When called is going to stop full page refresh */
  e.preventDefault();

  // console.log('form submitted');
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    console.log(app.options);

    renderToRefreshData();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderToRefreshData();
  console.log(app.options);
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderToRefreshData = function renderToRefreshData() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options!' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'remove all'
    ),
    React.createElement(
      'ol',
      null,
      /* So oder ..
      app.options.map((option) => {
        return <li key={option} >{option}</li>;
      }) */

      /* soo .. */
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderToRefreshData();
