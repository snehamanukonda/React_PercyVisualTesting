import { useEffect } from "react";
export default function LoopOver() {
  var a = [1, 2, 3, 4, 5];
  var b = {
    1: { name: "sneha", age: 25, company: "accenture" },
    2: { name: "asha", age: 26, company: "valueLabs" }
  };
  useEffect(() => {}, []);
  var res = a.map((i, j) => {
    return <p key={j}> {i} </p>;
  });
  console.log(Object.keys(b));
  var BRes = Object.keys(b).map((i, j) => {
    console.log(i);
    return <li> {b[i].name}</li>;
  });
  console.log(b["1"]);
  return (
    <div>
      nn
      <ul>{BRes}</ul>
    </div>
  );
}
