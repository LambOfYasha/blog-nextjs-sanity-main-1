import React from 'react'

function Accordion(props) {


function myFunction() {
  var x = document.getElementById(`${props.demo}`);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

  return (
    <div>    
   
    <button onClick={myFunction} className={props.classType}>
    {props.title}</button>
    
    <div id={`${props.demo}`} className="w3-container w3-hide">
      {props.children}
    </div></div>
  )
}

export default Accordion