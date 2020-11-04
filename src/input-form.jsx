import React from "react";

const Input = ({obj}) => {
  var x = 0;
  var name, password;

  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          name = e.target.value;
          console.log(name);
        }}
      />
      <input
        type="password"
        onChange={(e) => {
          password = e.target.value;
          console.log(password);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          x = x + 1;
          obj.users.user.name = name;
          obj.users.user.password = password;

          console.log(obj.users.user);
        }}
      >
        button
      </button>
    </form>
  );
};
export default Input;
