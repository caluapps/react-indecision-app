class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing four', 'Thing three'];

      return(
        <div>
          <Header
            title={title}
            subtitle={subtitle} />
          <Action />
          <Options
            options={options} />
          <AddOption />
        </div>
      );
  }
}

class Header extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <p>This is from Header</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

/*  Options -> Options component here
 *    list of available options
 */

/*  Option -> Option component here
 */

/*  Setup options prop for Options component
 *  Render the length of the array
 */

/* Render new p tag for each option (set text, set key)
 */

/* Options Component */
class Options extends React.Component {
  render() {
    return (
      <div>
        {
          // this.props.options.length
          // this.props.options.map((option) => <li key={option} >{option}</li>)
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
          {this.props.optionText}
      </div>
    );
  }
}

/*  AddOption -> AddOption component here
 *    form allows user to type some text and sumbit it with a button
 */

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <input type='text' />
        <button>
          Add Option
        </button>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
