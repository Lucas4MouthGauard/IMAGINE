import React from 'react';

function App() {
  const handleCopy = () => {
    navigator.clipboard.writeText('CA:D1zNpCAu6BMGy6Tb8dfEDGxJn4dsLhBCQYFnAKv8bonk');
  };

  return (
    <div className="App min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ✨ Imagine ✨
          </span>
        </h1>
        <div className="mb-6">
          <button 
            onClick={handleCopy}
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 py-2 rounded-full text-lg shadow-lg cursor-pointer select-all hover:scale-105 transition-transform duration-200"
            title="Click to copy: CA:D1zNpCAu6BMGy6Tb8dfEDGxJn4dsLhBCQYFnAKv8bonk"
          >
            CA:D1zNpCAu6BMGy6Tb8dfEDGxJn4dsLhBCQYFnAKv8bonk
          </button>
        </div>
        <p className="text-xl text-white/80 mb-8">
          A new way to create creative viral videos fast
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Start Creating
        </button>
      </div>
    </div>
  );
}

export default App; 