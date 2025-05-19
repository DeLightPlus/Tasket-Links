import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../../services/auth";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await loginService(values.email, values.password);
      dispatch(login(data.token));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <AuthForm
          mode="login"
          onSubmit={handleSubmit}
          error={error}
          values={values}
          setValues={setValues}
          remember={remember}
          setRemember={setRemember}
          onSwitchMode={handleSwitchToSignup}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Login;