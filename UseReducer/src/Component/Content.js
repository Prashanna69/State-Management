import React, { useReducer, useState } from "react";

// Making a temporary object

let data = [{ id: 1, desc: "", task: false }];

const Content = () => {
  const [desc, setDesc] = useState("");

  //getting the input and storing it in Array
  function dataMapping(data) {
    const desc = document.getElementById("input").value;

    if (desc) {
      let container = document.getElementById("Container");
      let tempData = data.map((ele) => {
        return `<div className="Container">
          <div id="todoDesc">${desc}</div>
          <div className="Buttons">
            <button id="deleteBtn">Delete</button>
            <button id="completeBtn">Complete</button>
          </div>
        </div>`;
      });

      container.innerHTML = tempData.join("");
    }
  }
  //preventing to refresh the page and empty the default value on submiting the form

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("input").value = "";
    });
  }
  return (
    <main>
      <form id="form">
        <input id="input" type="text" placeholder="Add your task.." required />
        <button onClick={addInput}>Add</button>
      </form>

      <div className="Container">
        <div id="todoDesc">Today Todo</div>
        <div className="Buttons">
          <button id="deleteBtn">Delete</button>
          <button id="completeBtn">Complete</button>
        </div>
      </div>
    </main>
  );
};

export default Content;
