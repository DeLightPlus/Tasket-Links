import React, { useState } from "react";
import AuthModal from "./AuthModal";
import { MailIcon, LockIcon } from "./Icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup as signupService } from "../../services/auth";
import { login } from "../../features/auth/authSlice";

const CustomInput = ({ label, type = "text", value, onChange, placeholder, icon, required }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="flex items-center border rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-400">
      {icon && <span className="mr-2 text-xl text-gray-400">{icon}</span>}
      <input
        className="flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-400"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  </div>
);

const CustomButton = ({ children, ...props }) => (
  <button
    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-indigo-700 transition w-full"
    {...props}
  >
    {children}
  </button>
);

const CustomLink = ({ children, ...props }) => (
  <a className="text-indigo-600 hover:underline text-sm cursor-pointer" {...props}>{children}</a>
);

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const data = await signupService(email, password);
      dispatch(login(data.token));
      onClose();
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <AuthModal
      isOpen={isOpen}
      onClose={onClose}
      title="Sign Up"
      footer={(close) => (
        <CustomButton type="button" onClick={close} className="bg-gray-200 text-gray-700 hover:bg-gray-300 mt-2">Close</CustomButton>
      )}
    >
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
        <CustomInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<MailIcon className="text-2xl text-gray-400" />}
          required
        />
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<LockIcon className="text-2xl text-gray-400" />}
          required
        />
        <CustomInput
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={<LockIcon className="text-2xl text-gray-400" />}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{' '}
        <CustomLink onClick={onSwitchToLogin}>Login</CustomLink>
      </p>
    </AuthModal>
  );
};

export default SignupModal;