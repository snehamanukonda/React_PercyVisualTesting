import "./styles.css";
import Counter from "./components/Counter.js";
import LoginForm from "./components/LoginForm";
// import Items from "./components/Items";
import LoopOver from "./components/LoopOver";
export default function App() {
  var a = ["sneha", "asha"];
  var b = a.map((i) => {
    console.log(i);
    return <p>i</p>;
  });
  return (
    <div className="App">
      Welcome
      <br />
      <br />
      {/* <LoginForm /> */}
      {/* <LoopOver /> */}
      <Counter />
    </div>
  );
}
