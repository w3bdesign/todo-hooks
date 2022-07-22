import React from "react";

export const Title = ({ children, record }) => {
  return (
    <h4
      style={{ textAlign: "left" }}
      className={
        // Display text-decoration: line-through if TODO is completed (true)
        record.completed === "true" ? "true" : "false"
      }
    >
      {children}
    </h4>
  );
};
