import React from "react";

function Update() {
  // choose game and update stats
  return (
    <div className="update-div">
      <form className="update-form">
        <input type="text" placeholder="Game Name" className="input"></input>
        <input type="date" className="input"></input>
        <input
          type="number"
          name="wins"
          placeholder="Number of Wins"
          className="input"
        ></input>
        <input
          type="number"
          name="losses"
          placeholder="Number of Losses"
          className="input"
        ></input>
        <div className="form-btn-div">
          <button type="submit" className="form-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
