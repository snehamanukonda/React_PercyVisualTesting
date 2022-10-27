import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  var counter = (opp) => {
    if (opp === "add") setCount(count + 1);
    else if (opp === "minus") setCount(count - 1);
  };
  return (
    <div>
      <h6>Count: {count}</h6>
      <button
        onClick={() => {
          counter("add");
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          counter("minus");
        }}
      >
        Decrement
      </button>
    </div>
  );
}
