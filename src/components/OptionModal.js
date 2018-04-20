import React from 'react';
import Modal from 'react-modal';

/* lange Schreibweise
const OptionModal = () => {
  return (
    <div>
      some text
    </div>
  )
}; */

/* kurze Schreibweise */
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button
      onClick={props.handleClearSelectedOption}
    >
      Okay
    </button>
  </Modal>
);

export default OptionModal;

// Create a new event handle in IndecisionApp that clears selectedOption state
// Pass that into OptionModal
// Call it on button clicked
