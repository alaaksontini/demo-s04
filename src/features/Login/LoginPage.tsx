import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin} className="bg-amber-600 rounded p-2 shadow">
        {" "}
        Se connecter{" "}
      </button>
    </div>
  );
}

export default Login;
