console.log('App.js is running!');

const app = {
  title: 'Title',
  subtitle: 'Some subtitles',
  options: []
};

const onFormSubmit = (e) => {
  /* When called is going to stop full page refresh */
  e.preventDefault();

  // console.log('form submitted');
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    console.log(app.options);

    renderToRefreshData();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderToRefreshData();
  console.log(app.options);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderToRefreshData = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options!' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>remove all</button>
      { /*
        numbers.map((number) => {
          return <p key={number} >Number: {number}</p>;
        }) */
      }
      <ol>
        { /* So oder ..
          app.options.map((option) => {
            return <li key={option} >{option}</li>;
          }) */
          
          /* soo .. */
          app.options.map((option) => <li key={option} >{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderToRefreshData();
