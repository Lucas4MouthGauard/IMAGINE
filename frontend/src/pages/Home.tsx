import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Video, 
  Zap, 
  TrendingUp, 
  Users, 
  Play,
  ArrowRight,
  Star
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Creation",
      description: "Create professional videos in minutes without complex technical knowledge"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI Assisted",
      description: "Smart creative suggestions to make your videos more engaging"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Rich Templates",
      description: "Massive video templates and materials for all creative needs"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Real-time video performance tracking and optimization strategies"
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Meme Creator",
      content: "Imagine increased my creation efficiency by 10x!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Content Marketer",
      content: "The best video creation tool, hands down!",
      rating: 5
    },
    {
      name: "Mike Wilson",
      role: "Social Media Influencer",
      content: "Simple to use, amazing results, highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ✨ Imagine ✨
              </span>
            </h1>
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 py-2 rounded-full text-lg shadow-lg">
                Coming Soon
              </span>
            </div>
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              A new way to create creative viral videos fast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Link to="/editor">
                  <button className="btn-primary text-lg px-8 py-4">
                    <Play className="inline mr-2 h-5 w-5" />
                    Start Creating
                  </button>
                </Link>
              <button className="btn-secondary text-lg px-8 py-4">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 text-purple-400/30"
        >
          <Sparkles className="h-12 w-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 right-10 text-blue-400/30"
        >
          <Video className="h-12 w-12" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Imagine?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              The ultimate tool for meme designers and content creators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-white/70">Active Creators</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
              <div className="text-white/70">Videos Created</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-indigo-400 mb-2">500+</div>
              <div className="text-white/70">Video Templates</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Users Say
            </h2>
            <p className="text-xl text-white/70">
              Real feedback from real users
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Creating?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join thousands of creators and start making amazing video content
            </p>
            <Link to="/editor">
              <button className="btn-primary text-lg px-8 py-4">
                Get Started
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 