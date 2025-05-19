import React, { useState } from "react";
import AuthModal from "./AuthModal";
import AuthForm from "../auth/AuthForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../../services/auth";
import { login } from "../../features/auth/authSlice";

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
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
      onClose();
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthModal
      isOpen={isOpen}
      onClose={onClose}
      title="Sign In"
      footer={(close) => (
        <button type="button" onClick={close} className="bg-gray-200 text-gray-700 hover:bg-gray-300 mt-2 px-6 py-2 rounded-lg w-full">Close</button>
      )}
    >
      <AuthForm
        mode="login"
        onSubmit={handleSubmit}
        error={error}
        values={values}
        setValues={setValues}
        remember={remember}
        setRemember={setRemember}
        onSwitchMode={onSwitchToSignup}
        loading={loading}
      />
    </AuthModal>
  );
};

export default LoginModal;