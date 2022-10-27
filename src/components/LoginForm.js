import { useEffect, useState } from "react";
export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const showPasswordHandler = (e) => {
    setShowPassword(!showPassword);
  };
  // useEffect(() => {
  //   console.log("useEffect");
  // });
  // useEffect(() => {
  //   console.log("useEffect username change");
  // }, [username]);

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <pre>
          username:
          <input type="text" value={username} onChange={usernameHandler} />
          <br />
          <br />
          Password:
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={passwordHandler}
          />
          <br />
          <input type="checkbox" onChange={showPasswordHandler} />
          <label>Show Password</label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </pre>
      </form>
    </div>
  );
}
