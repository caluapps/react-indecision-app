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

const app = {
  title: 'Title',
  subtitle: 'Some subtitles',
  options: ['One', 'Two']
}

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options!' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: 'j:caluapps',
  do: 'App Development',
  for: 5,
  where: 'Vienna'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>Do: {user.do}</p>
    {(user.for && user.for >= 2) && <p>For: {user.for} years</p>}
    {getLocation(user.where)}
  </div>
);

/* Challenge: Create a templateTwo var JSX expression
 *  div
 *    h1 -> j:caluapps
 *    p -> Age: 32
 *    p -> Location: Vienna
 * Render templateTwo instead of template
*/

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
