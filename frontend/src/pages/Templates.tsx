import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Search, Filter, Play, Heart } from 'lucide-react';

const Templates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Funny', 'Inspirational', 'Tech', 'Food', 'Travel', 'Music', 'Education'];
  
  const templates = [
    {
      id: 1,
      title: 'Funny Daily',
      category: 'Funny',
      thumbnail: '/api/placeholder/300/200',
      duration: '15s',
      likes: 1234,
      description: 'Perfect for sharing funny moments in daily life'
    },
    {
      id: 2,
      title: 'Tech Frontier',
      category: 'Tech',
      thumbnail: '/api/placeholder/300/200',
      duration: '30s',
      likes: 856,
      description: 'Showcase latest tech products and innovative ideas'
    },
    {
      id: 3,
      title: 'Food Making',
      category: 'Food',
      thumbnail: '/api/placeholder/300/200',
      duration: '45s',
      likes: 2341,
      description: 'Record amazing moments in food making process'
    },
    {
      id: 4,
      title: 'Travel Diary',
      category: 'Travel',
      thumbnail: '/api/placeholder/300/200',
      duration: '60s',
      likes: 1892,
      description: 'Share beautiful memories from travels'
    },
    {
      id: 5,
      title: 'Inspirational Quotes',
      category: 'Inspirational',
      thumbnail: '/api/placeholder/300/200',
      duration: '20s',
      likes: 3456,
      description: 'Spread positive energy and life insights'
    },
    {
      id: 6,
      title: 'Music Sharing',
      category: 'Music',
      thumbnail: '/api/placeholder/300/200',
      duration: '25s',
      likes: 1678,
      description: 'Share favorite music and mood'
    }
  ];

      const filteredTemplates = templates.filter(template => {
      const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Video Template Library
          </h1>
          <p className="text-xl text-white/70">
            Choose the right template and start your creation quickly
          </p>
        </motion.div>

        {/* 搜索和筛选 */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* 搜索框 */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* 分类筛选 */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-white/50" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 模板网格 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card group hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {/* 缩略图 */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white/50 group-hover:text-white transition-colors" />
                </div>
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {template.duration}
                </div>
                <div className="absolute bottom-2 left-2 bg-purple-500/80 text-white text-xs px-2 py-1 rounded">
                  {template.category}
                </div>
              </div>

              {/* 内容 */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {template.title}
                </h3>
                <p className="text-white/70 text-sm mb-3">
                  {template.description}
                </p>
                
                {/* 操作按钮 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-white/50">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{template.likes}</span>
                  </div>
                  <button className="btn-primary text-sm px-4 py-2">
                    Use Template
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 空状态 */}
        {filteredTemplates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Sparkles className="h-16 w-16 text-white/30 mx-auto mb-4" />
            <p className="text-white/50 text-lg">
              No matching templates found
            </p>
            <p className="text-white/30">
              Try adjusting search criteria or select other categories
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Templates; 