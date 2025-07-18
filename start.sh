#!/bin/bash

echo "🚀 Starting Imagine - Creative Video Platform"
echo "=============================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
cd frontend
npm install

echo "🌟 Starting development server..."
npm start

echo "✅ Imagine is running at http://localhost:3000" 