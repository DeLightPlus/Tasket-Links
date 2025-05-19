import React, { useState } from "react";
import AuthModal from "./AuthModal";
import AuthForm from "../auth/AuthForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup as signupService } from "../../services/auth";
import { login } from "../../features/auth/authSlice";

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [values, setValues] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const data = await signupService(values.email, values.password);
      dispatch(login(data.token));
      onClose();
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthModal
      isOpen={isOpen}
      onClose={onClose}
      title="Sign Up"
      footer={(close) => (
        <button type="button" onClick={close} className="bg-gray-200 text-gray-700 hover:bg-gray-300 mt-2 px-6 py-2 rounded-lg w-full">Close</button>
      )}
    >
      <AuthForm
        mode="signup"
        onSubmit={handleSubmit}
        error={error}
        values={values}
        setValues={setValues}
        onSwitchMode={onSwitchToLogin}
        loading={loading}
      />
    </AuthModal>
  );
};

export default SignupModal;