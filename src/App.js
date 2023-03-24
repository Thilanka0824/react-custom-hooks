import "./App.css";
import useStringHook from "./hooks/StringHook";
import useCheckValidEmail from "./hooks/CheckValidEmail";
import useInput from "./hooks/useInput";

function App() {
  const {
    stringHook,
    setStringHook,
    customWordz,
    reverseString,
    doubleString,
  } = useStringHook();

  const firstName = useInput("first name");
  const lastName = useInput("last name");
  const email = useInput();

  const checkValidEmail = useCheckValidEmail(email.value);

  return (
    <div className="App App-header">
      <h1>Custom String Hooks</h1>
      <p>{stringHook}</p>
      {customWordz}
      <br />
      <button onClick={reverseString}>Reverse IT!</button>
      <br />
      <button onClick={doubleString}>Double IT!</button>
      <br />
      <input onChange={(event) => setStringHook(event.target.value)} />
      <h1>----------------------------------</h1>
      <p>{checkValidEmail ? "True" : "False"}</p>
      <h3>First Name: {firstName.value}</h3>
      <input {...firstName} />
      <h3>Last Name: {lastName.value}</h3>
      <input {...lastName} />
      <h3>email: {email.value}</h3>
      <input {...email} />
      <h3>Email is: {checkValidEmail ? "valid" : "not valid"}</h3>
      <br />
    </div>
  );
}

export default App;
