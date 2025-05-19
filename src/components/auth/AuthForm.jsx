import React from "react";
import { MailIcon, LockIcon } from "../modals/Icons";

const CustomInput = ({ label, name, type = "text", value, onChange, placeholder, icon, required }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="flex items-center border-gray-300 border-1 rounded-lg pl-3 bg-white focus-within:ring-3 focus-within:ring-gray-400">
      {icon && <span className="mr-2 text-xl text-gray-400">{icon}</span>}
      <input
        className="flex-1 outline-none border-none bg-transparent text-gray-800 placeholder-gray-400"
        type={type}
        name={name}
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

const AuthForm = ({
  mode = "login", // "login" or "signup"
  onSubmit,
  error,
  values,
  setValues,
  remember,
  setRemember,
  onSwitchMode,
  loading
}) => {
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-2">
        <CustomInput
          label="Email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          icon={<MailIcon className="text-2xl text-gray-400" />}
          required
        />
        <CustomInput
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
          value={values.password}
          onChange={handleChange}
          icon={<LockIcon className="text-2xl text-gray-400" />}
          required
        />
        {mode === "signup" && (
          <CustomInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your password"
            type="password"
            value={values.confirmPassword || ""}
            onChange={handleChange}
            icon={<LockIcon className="text-2xl text-gray-400" />}
            required
          />
        )}
        {mode === "login" && (
          <div className="flex items-center justify-between">
            <CustomCheckbox
              label="Remember me"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <CustomLink>Forgot password?</CustomLink>
          </div>
        )}
        <CustomButton type="submit" disabled={loading}>{mode === "login" ? "Sign In" : "Sign Up"}</CustomButton>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        {mode === "login"
          ? <>Don&apos;t have an account? <CustomLink onClick={onSwitchMode}>Sign Up</CustomLink></>
          : <>Already have an account? <CustomLink onClick={onSwitchMode}>Login</CustomLink></>}
      </p>
    </>
  );
};

export default AuthForm;