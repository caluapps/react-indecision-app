console.log('App.js is running!');

const app = {
  title: 'Title',
  subtitle: 'Some subtitles',
  options: ['One', 'Two']
}

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

let count = 0;
const addOne = () => {
  console.log('addOne');
  count++;
  console.log('count:', count);
  renderCounterApp();
};

const minusOne = () => {
  console.log('minusOne');
  count--;
  console.log('count:', count);
  renderCounterApp();
};

const reset = () => {
  console.log('reset');
  count = 0;
  console.log('count:', count);
  renderCounterApp();
};

/* Challenge: Make buttons
 * Button '-1' - setup minusOne function and register - log 'minusOne'
 * Button 'reset' - sestup reset function - log 'reset'
*/

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} >+1</button>
      <button onClick={minusOne} >-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
