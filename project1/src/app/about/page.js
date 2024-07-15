"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    let interval = setInterval(() => {
      let realTime = new Date().toLocaleTimeString();
      setTime(realTime); // Move setTime inside the setInterval callback
    }, 1000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
  return (
    <div>
      <h1>i am about page </h1>
      <button
        className=" bg-purple-600 rounded-md px-5 hover:bg-white hover:text-purple-600"
        onClick={() => b(a + 1)}
      >
        Click me{" "}
      </button>
      <p>{time}</p>
    </div>
  );
};

export default page;
