import React from 'react';

import AddOption from './AddOption.js';
import Options from './Options.js';
import Header from './Header.js';
import Action from './Action.js';

// pull the state out of constructor
// convert all 4 event handlers to class properties (arrow functions)
// delete the constructor completely
// start with class properties and end with method

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      // console.log('fetching data');

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.options.length !== this.state.options.length) {
      console.log('saving data', this.state.options);
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
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
