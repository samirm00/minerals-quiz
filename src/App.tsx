import React from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <Header currentQuestion={1} totalQuestionNumber={10} timer={10} />
    </div>
  );
}

export default App;
