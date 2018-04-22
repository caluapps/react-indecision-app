import React from 'react';

/* stateless functional component
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

export default Option;
*/

/* refactored */
const Option = (props) => (
  <div>
    {props.optionText}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
