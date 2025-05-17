import React from "react";

const AuthModal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay with blur */}
      <div
        className="fixed inset-0 bg-grey bg-opacity-40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      {/* Modal container */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto p-8 sm:p-10 flex flex-col items-center animate-fade-in border border-gray-100">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {title && <h2 className="text-2xl font-bold text-gray-800 mb-4 w-full text-center">{title}</h2>}
        <div className="w-full flex-1 flex flex-col gap-4 py-2 px-2 sm:px-4">
          {children}
        </div>
        {footer && <div className="w-full mt-4">{footer(onClose)}</div>}
      </div>
    </div>
  );
};

export default AuthModal;