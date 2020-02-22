import React from "react";

export const Display = props => {
  const userType = props.userType.split("");
  const text = props.text.split("");
  return (
    <div style={{ height: "40vh" }}>
      <div
        className="border p-3 p-5 mt-5 mb-5"
        style={{ height: "100%", overflow: "auto" }}
      >
        {text.map((item, index) => {
          let color;
          if (index < props.userType.length) {
            color = item === userType[index] ? "#abff4f" : "#f21b3f";
          }
          return (
            <span key={index} style={{ backgroundColor: color }}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};
