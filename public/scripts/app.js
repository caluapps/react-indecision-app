'use strict';

console.log('App.js is running!');

/* Challenge: create app object title/subtitle
 * use title/subtitle in the template
 * render template
 */

/* Challenge: only render the subtitle (and p tag) if subtitle exists &&
 * render new p tag - if options.length > 0
 *  if true: 'here are your options'
 *  if false: 'no options'
 */

var app = {
  title: 'Title',
  subtitle: 'Some subtitles',
  options: ['One', 'Two']

  // JSX - JavaScript XML
};var template = React.createElement(
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
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'j:caluapps',
  do: 'App Development',
  for: 5,
  where: 'Vienna'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  React.createElement(
    'p',
    null,
    'Do: ',
    user.do
  ),
  user.for && user.for >= 2 && React.createElement(
    'p',
    null,
    'For: ',
    user.for,
    ' years'
  ),
  getLocation(user.where)
);

/* Challenge: Create a templateTwo var JSX expression
 *  div
 *    h1 -> j:caluapps
 *    p -> Age: 32
 *    p -> Location: Vienna
 * Render templateTwo instead of template
*/

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
