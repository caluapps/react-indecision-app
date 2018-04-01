class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing four', 'Thing three']
    };
  }
  // handleDeleteOptions
  // handlePick - pass down to Action and setup onClick - bind here
  //  randomly pick an option and alert it
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    console.log('handlePick');
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);

    this.setState(() => {
      return {

      };
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

      return(
        <div>
          <Header
            title={title}
            subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            options={this.state.options}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
          />
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
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
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

/* Add Remove All Button
 * Setup handleRemoveAll -> alert some message
 * setup onClick to fire the method
 */

/* Options Component */
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions} >Remove All</button>
        {
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

/*  1. Setup the form with text input and submit button
 *  2. Wire up onSubmit
 *  3. handleAddOption -> fetch the value type -> if value, then alert
 */

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
