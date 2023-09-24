import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState(''); //per keystroke

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);


  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);

  };

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  }

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault(); //do nothing, don't send a POST request
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {

      return;
    }


    //nameInputRef.current.value = ''; //direct manipulation of the DOM, not good!
    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);

  };



  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (

    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input type='email' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
        {enteredEmailIsInvalid && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
