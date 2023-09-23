import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState(''); //per keystroke
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault(); //do nothing, don't send a POST request
    if(enteredName.trim() == ''){
      return;
    }
    const enteredValue = nameInputRef.current.value;
    //nameInputRef.current.value = ''; //direct manipulation of the DOM, not good!
    setEnteredName('');

  };
  return (
  
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
