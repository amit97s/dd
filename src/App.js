import "./App.css";
import { Toaster } from "react-hot-toast";
import Router from "./routers/Router";

function App() {
  return (
    <div className="App">
      <Router />
      <Toaster />
    </div>
  );
}

export default App;
