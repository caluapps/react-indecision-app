class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    console.log('fetching data');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log('saving data');

  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleDeleteOptions() {
    /* lange Schreibweise
    this.setState(() => {
      return {
        options: []
      };
    }); */

    /* kurze Schreibweise */
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    console.log('handleDeleteOption:', optionToRemove);
    this.setState((prevState) => ({
      /* lange Schreibweise
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }) */
      /* kurze Schreibweise */
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    console.log('handlePick');
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    console.log('handleAddOption:', option);
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    /* lange Schreibweise
    this.setState((prevState) => {
      return{
        options: prevState.options.concat(option)
      };
    }); */

    /* kurze Schreibweise */
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }
  render() {
    // const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

      return(
        <div>
          <Header
            // title={title}
            subtitle={subtitle}
          />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            //options={this.state.options}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {
        props.subtitle && <h2>{props.subtitle}</h2>
      }
      <p>This is from Header</p>
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

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

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions} >Remove All</button>
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
        {props.optionText}
        <button
          // onClick={props.handleDeleteOption}
          onClick={(e) => {
            props.handleDeleteOption(props.optionText)
          }}
        >
          remove
        </button>
    </div>
  );
};

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

    /* lange Schreibweise
    this.setState(() => {
      return {
        error: error
      };
    }); */

    /* kurze Schreibweise */
    this.setState(() => ({ error: error }));
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

IndecisionApp.defaultProps = {
  options: ['Option one', 'Option two']
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
