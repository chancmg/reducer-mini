import React from "react";
import "./Todo.style.css";

function TodoContainer() {
  return (
    <div className="container">
      <div className="">
        <div className="">
          <div className="">
            <h1 className="">{{ msg }}</h1>
            <h3 className="">
              All todos count: 100
              <span className="">(completed {{ completedTodosLength }})</span>
            </h3>
          </div>
          <div>
            <ul className="list">
              <li className="list-item">
                <label className="checkbox">
                  <input type="checkbox">{{todo}}</input>
                </label>
              </li>
              <input
                type="text"
                className="input"
                placeholder="Add todo"
              />
              <button className="button">+ Add</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
