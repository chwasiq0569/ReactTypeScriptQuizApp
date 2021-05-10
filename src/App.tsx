// import './App.css';
// import "./Styles/InfraPopup.css";
// import "./Styles/Interface.css";
// import "./Styles/MissingParams.css";
// import "./Styles/Results.css";
// import "./Styles/SimulatePopup.css";
// import "./Styles/StreamPopup.css";

import TextField from "./components/TextField"


 
const App: React.FC = () => {

  const myFunc = (bob: string): string => {
        return bob + "is Good Boy"
  }

  return ( <div>
     <TextField text="HELLO" ok={true} i={1} fn={myFunc} person={{firstname: "Wasiq", lastname: "Abdullah"}} />
  </div> );
}
 
export default App;
