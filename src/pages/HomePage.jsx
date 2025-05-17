import React, { useState } from "react";
import LoginModal from "../components/modals/LoginModal";
import SignupModal from "../components/modals/SignupModal";

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleSwitchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-indigo-100 flex flex-col">      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 text-center drop-shadow-lg">
          See it, save it, organize it.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 text-center max-w-2xl">
          Discover, collect, and organize your favorite links, recipes, tasks, and more — all in one beautiful place, inspired by the best of Pinterest.
        </p>
        <button
          onClick={() => setShowSignup(true)}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow hover:bg-indigo-700 transition mb-8"
        >
          Get Started
        </button>
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="To-Do List" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-pink-600 mb-1">To-Do List</h2>
              <p className="text-gray-600 text-sm">Manage your tasks, set deadlines, and track progress.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" alt="Shopping List" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-pink-600 mb-1">Shopping List</h2>
              <p className="text-gray-600 text-sm">Create and organize grocery lists or any other shopping needs.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Recipe App" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-pink-600 mb-1">Recipe App</h2>
              <p className="text-gray-600 text-sm">Save and organize recipes, automatically generate shopping lists based on ingredients.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Bookmarks" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-pink-600 mb-1">Saved by Tasket</h2>
              <p className="text-gray-600 text-sm">Bookmark and revisit your favorite links — recipes, articles, shopping products, or guides.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center text-gray-400 py-6 text-sm">
        &copy; {new Date().getFullYear()} Tasket-Links
      </footer>
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} onSwitchToSignup={handleSwitchToSignup} />
      <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} onSwitchToLogin={handleSwitchToLogin} />
    </div>
  );
};

export default HomePage;