import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Play, 
  Pause, 
  Download, 
  Settings,
  Sparkles,
  Save
} from 'lucide-react';

const Editor: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(60);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Uploaded file:', file.name);
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <Sparkles className="inline mr-2 h-8 w-8 text-purple-400" />
            Video Editor
          </h1>
          <p className="text-xl text-white/70">
            Create amazing creative video content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 预览区域 */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Upload className="h-16 w-16 text-white/50 mx-auto mb-4" />
                  <p className="text-white/70 mb-4">Drag video files here or click to upload</p>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="video-upload"
                  />
                  <label htmlFor="video-upload" className="btn-primary cursor-pointer">
                    Select Video File
                  </label>
                </div>
              </div>

              {/* 播放控制 */}
              <div className="flex items-center justify-center space-x-4 mb-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="btn-secondary"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
                <div className="flex-1 bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  ></div>
                </div>
                <span className="text-white/70 text-sm">
                  {Math.floor(currentTime)}s / {duration}s
                </span>
              </div>

              {/* 操作按钮 */}
              <div className="flex justify-center space-x-4">
                <button className="btn-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save Project
                </button>
                <button className="btn-secondary">
                  <Download className="h-4 w-4 mr-2" />
                  Export Video
                </button>
                <button className="btn-secondary">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </button>
              </div>
            </div>
          </div>

          {/* 工具栏 */}
          <div className="space-y-6">
            {/* 模板选择 */}
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">Select Template</h3>
              <div className="space-y-2">
                                  {['Funny', 'Inspirational', 'Tech', 'Food', 'Travel'].map((template) => (
                    <button
                      key={template}
                      className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                    >
                      {template} Template
                    </button>
                  ))}
              </div>
            </div>

            {/* 特效库 */}
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">Effects Library</h3>
              <div className="grid grid-cols-2 gap-2">
                                  {['Transition', 'Filter', 'Text', 'Sticker', 'Music', 'Sound'].map((effect) => (
                    <button
                      key={effect}
                      className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/80 hover:text-white text-sm"
                    >
                      {effect}
                    </button>
                  ))}
              </div>
            </div>

            {/* AI 建议 */}
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">
                <Sparkles className="inline mr-2 h-5 w-5 text-purple-400" />
                AI Creative Suggestions
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <p className="text-white/80 text-sm">
                    Suggest adding some dynamic text effects to enhance visual impact
                  </p>
                </div>
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-white/80 text-sm">
                    This scene is suitable for adding background music to create atmosphere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor; 