import React, { useState } from "react";
import AuthModal from "./AuthModal";
import { MailIcon, LockIcon } from "./Icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../../services/auth";
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

const CustomCheckbox = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="accent-pink-500 w-4 h-4 rounded border-gray-300 focus:ring-pink-400"
    />
    {label}
  </label>
);

const CustomLink = ({ children, ...props }) => (
  <a className="text-indigo-600 hover:underline text-sm cursor-pointer" {...props}>{children}</a>
);

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginService(email, password);
      dispatch(login(data.token));
      onClose();
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Invalid email or password");
    }
  };

  return (
    <AuthModal
      isOpen={isOpen}
      onClose={onClose}
      title="Sign In"
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
        <div className="flex items-center justify-between">
          <CustomCheckbox
            label="Remember me"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <CustomLink>Forgot password?</CustomLink>
        </div>
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Don&apos;t have an account?{' '}
        <CustomLink onClick={onSwitchToSignup}>Sign Up</CustomLink>
      </p>
    </AuthModal>
  );
};

export default LoginModal;