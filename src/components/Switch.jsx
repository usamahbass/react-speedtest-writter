import React from "react";

const Switch = props => {
  return (
    <div>
      <div
        className="custom-control custom-switch"
        style={{ position: "absolute", right: 0 }}
      >
        <input
          type="checkbox"
          checked={props.checked}
          value={props.value}
          onClick={props.click}
          className="custom-control-input"
          id={props.id}
        />
        <label
          name={props.name}
          className="custom-control-label"
          htmlFor={props.for}
          style={{ cursor: "pointer" }}
        >
          Light / Dark
        </label>
      </div>
    </div>
  );
};

export default Switch;
