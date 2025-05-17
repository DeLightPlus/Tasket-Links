import React from "react";

const AuthModal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-40">
      <div className="bg-white rounded-xl shadow-2xl p-0 relative w-full max-w-md mx-4 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col gap-1 px-8 pt-8 pb-4">
          <div className="text-2xl font-bold text-center mb-2">{title}</div>
          <div>{children}</div>
        </div>
        <div className="px-8 pb-6 pt-2 flex flex-col gap-2">
          {footer ? footer(onClose) : (
            <button
              className="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-lg px-4 py-2 font-semibold w-full"
              onClick={onClose}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;