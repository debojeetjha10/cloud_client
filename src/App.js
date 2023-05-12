import { useState } from "react";
import "./App.css";
import CreateUser from "./components/create_user";
import Navbar from "./components/Navbar";
import Login from "./components/login";

function App() {
  const [isUserCreation, setUserCreation] = useState(false);
  return (
    <>
      <Navbar
        switchLogin={() => setUserCreation(false)}
        switchRegister={() => setUserCreation(true)}
      />
      <div className="App">
        {isUserCreation ? <CreateUser /> : <Login />}
      </div>
    </>
  );
}

export default App;
