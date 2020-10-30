import React, { useEffect, useState, useRef } from "react";

export default function RefDemo() {
  const inputRef = useRef();

  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("ref demo render...");
  }, [inputRef]);

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}
