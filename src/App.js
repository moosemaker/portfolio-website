import React from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import About from "./components/About";

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Navbar displayPic={user ? true : false} />
      <About />
    </div>
  );
};

export default App;
