#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment to Vercel...');

// Check if vercel is installed
try {
  execSync('vercel --version', { stdio: 'pipe' });
} catch (error) {
  console.error('❌ Vercel CLI not found. Installing...');
  execSync('npm install -g vercel', { stdio: 'inherit' });
}

// Create vercel.json if it doesn't exist
const vercelConfig = {
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
};

if (!fs.existsSync('vercel.json')) {
  fs.writeFileSync('vercel.json', JSON.stringify(vercelConfig, null, 2));
  console.log('✅ Created vercel.json');
}

// Deploy to Vercel
try {
  console.log('📦 Deploying to Vercel...');
  const output = execSync('vercel --yes --prod', { 
    stdio: 'pipe',
    encoding: 'utf8'
  });
  
  // Extract URL from output
  const urlMatch = output.match(/https:\/\/[^\s]+/);
  if (urlMatch) {
    console.log('🎉 Deployment successful!');
    console.log('🌐 Your app is live at:', urlMatch[0]);
    console.log('📱 Open in browser:', urlMatch[0]);
  } else {
    console.log('✅ Deployment completed. Check Vercel dashboard for URL.');
  }
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
