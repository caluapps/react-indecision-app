class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
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
  handleAddOption(option) {
    console.log('handleAddOption:', option);
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      /* Eine Möglichkeit neues Array zu übermitteln
      prevState.options.push(option); */
      return{
        options: prevState.options.concat(option)
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
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
  }
}

/* umgewandelt von einer Component zu einer Stateless Components
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
} */

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>This is from Header</p>
    </div>
  );
};

/* umgewandelt von einer Component zu einer Stateless Components
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
} */

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

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

/*  Options Component
    umgewandelt von einer Component zu einer Stateless Components
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
} */

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions} >Remove All</button>
      {
        props.options.map((option) => <Option key={option} optionText={option}/>)
      }
    </div>
  );
};

/* umgewandelt von einer Component zu einer Stateless Components
class Option extends React.Component {
  render() {
    return (
      <div>
          {this.props.optionText}
      </div>
    );
  }
} */

const Option = (props) => {
  return (
    <div>
        {props.optionText}
    </div>
  );
};

/*  AddOption -> AddOption component here
 *    form allows user to type some text and sumbit it with a button
 */

/*  1. Setup the form with text input and submit button
 *  2. Wire up onSubmit
 *  3. handleAddOption -> fetch the value type -> if value, then alert
 */

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error
        /* Andere schreibweise:
        error */
      };
    });
  }

  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return(
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };
// <User name='jay' age={33}/>

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
