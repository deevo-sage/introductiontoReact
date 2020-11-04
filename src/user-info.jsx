import React from "react";

const Info=({name,college,year})=>{
    return (
      <div>
        <ul>
    <li>name : {name}</li>
    <li>college : {college}</li>
    <li>year : {year}</li>
        </ul>
      </div>
    );
}
export default Info;