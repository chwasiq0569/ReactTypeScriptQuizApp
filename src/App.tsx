// import './App.css';
// import "./Styles/InfraPopup.css";
// import "./Styles/Interface.css";
// import "./Styles/MissingParams.css";
// import "./Styles/Results.css";
// import "./Styles/SimulatePopup.css";
// import "./Styles/StreamPopup.css";

import TextField from "./components/TextField"

const App: React.FC = () => {

  const myFunc = (name: string): string => name + " is Good Boy"
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): string => e.target.value
  return ( <div>
                <TextField text="REACT-TYPESCRIPT IS EASY" male={true} age={21} fn={myFunc} fullname={{firstname: "Wasiq", lastname: "Abdullah"}} handleChange={handleChange} />
           </div> );
}
 
export default App;
