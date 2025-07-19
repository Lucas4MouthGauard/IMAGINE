import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Target, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: '张小明',
      role: '创始人 & CEO',
      avatar: '/api/placeholder/100/100',
      description: '前 Google 产品经理，拥有 10 年视频创作经验'
    },
    {
      name: '李小红',
      role: 'CTO',
      avatar: '/api/placeholder/100/100',
      description: 'AI 专家，专注于计算机视觉和机器学习'
    },
    {
      name: '王大力',
      role: '设计总监',
      avatar: '/api/placeholder/100/100',
      description: '资深 UI/UX 设计师，曾获多个设计大奖'
    }
  ];

  const values = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: '创新',
      description: '不断探索新的创作方式和表达形式'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '社区',
      description: '构建创作者社区，分享经验和灵感'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: '专注',
      description: '专注于为用户提供最好的创作体验'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: '热爱',
      description: '对创意和技术的无限热爱驱动我们前进'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 关于我们 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <Sparkles className="inline mr-2 h-8 w-8 text-purple-400" />
            About Imagine
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Imagine was born from a simple idea: to let everyone easily create amazing video content.
            We believe creativity should not be limited by technical barriers.
          </p>
        </motion.div>

        {/* 使命愿景 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <h2 className="text-2xl font-bold text-white mb-4">我们的使命</h2>
            <p className="text-white/70 leading-relaxed">
               democratize video creation by providing powerful yet simple tools that empower 
              everyone to tell their stories through compelling visual content. We believe that 
              creativity should be accessible to all, regardless of technical expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <h2 className="text-2xl font-bold text-white mb-4">我们的愿景</h2>
            <p className="text-white/70 leading-relaxed">
              成为全球领先的创意视频制作平台，连接创作者与观众，激发无限创意可能。
              我们希望通过技术的力量，让每个人都能成为优秀的视频创作者。
            </p>
          </motion.div>
        </div>

        {/* 核心价值观 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12">核心价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-white/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 团队 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-white">
                    ✨
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-white/70 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 成就 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="card text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">我们的成就</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-white/70">活跃创作者</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
              <div className="text-white/70">制作视频</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-400 mb-2">500+</div>
              <div className="text-white/70">视频模板</div>
            </div>
          </div>
        </motion.div>

        {/* 联系我们 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">联系我们</h2>
          <p className="text-white/70 mb-6">
            有任何问题或建议？我们很乐意听到您的声音
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              发送邮件
            </button>
            <button className="btn-secondary">
              加入社区
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 