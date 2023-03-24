import React, { useState } from "react";

const useStringHook = () => {
  const [stringHookState, setStringHookState] = useState('Silly String');
    const hello = "Hello from the custom hook"

    const reverseString = () => {
        setStringHookState(stringHookState.split('').reverse().join(''))
    }

    const doubleString = () => {
        setStringHookState(stringHookState + " " + stringHookState)
    }

  return {
    stringHook: stringHookState,
    setStringHook: setStringHookState,
    customWordz: hello,
    reverseString: reverseString,
    doubleString: doubleString
  }
};



export default useStringHook;
