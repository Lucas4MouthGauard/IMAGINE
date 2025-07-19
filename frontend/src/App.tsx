import React from 'react';

function App() {
  const handleCopy = () => {
    navigator.clipboard.writeText('CA: Coming Soon');
  };

  const handleStartCreating = () => {
    // 可以添加多种功能选项
    const options = [
      '🚀 开始创建视频',
      '📱 下载移动应用',
      '💬 加入社区',
      '📧 联系我们',
      '🎯 查看教程'
    ];
    
    const randomOption = options[Math.floor(Math.random() * options.length)];
    alert(`✨ ${randomOption} ✨\n\n功能即将上线，敬请期待！`);
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
            title="Click to copy: CA: Coming Soon"
          >
            CA: Coming Soon
          </button>
        </div>
        <p className="text-xl text-white/80 mb-8">
          A new way to create creative viral videos fast
        </p>
        <button 
          onClick={handleStartCreating}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Start Creating
        </button>
      </div>
    </div>
  );
}

export default App; 