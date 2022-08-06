import React from 'react';
function Login() {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const hs = () => {};

  return (
    <div>
      <h1>Login page</h1>

      <input value="mor_2314" ref={usernameRef} placeholder="username" />
      <input value="83r5^_" ref={passwordRef} placeholder="username" />

      <button onClick={hs}>login me </button>
    </div>
  );
}

export default Login;
