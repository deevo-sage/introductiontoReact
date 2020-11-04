import React from "react";
import ReactDOM from "react-dom";
import Input from "./input-form";
import Nav from "./nav";
import Info from "./user-info";
const App = () => {

const user={
  name:"student",
  college:"IITD",
  year:"2nd",
  loggedIn:false
}
  var obj = {
    users: { user: { name: "", password: "" } },
  };
  return (
    <div className="container">
<Nav/>

  <div>
  <h1>heading</h1>
  <p>paragraph</p>
  <Input obj={obj}/>
  <Info {...user}/>
  </div>
  </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
