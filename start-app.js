const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting Clothes Store Application...');

try {
    // Check if node_modules exists
    const fs = require('fs');
    if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
        console.log('📦 Installing dependencies...');
        execSync('npm install', { stdio: 'inherit' });
    }

    // Start the application
    console.log('✨ Starting the application...');
    execSync('npm start', { stdio: 'inherit' });
} catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
} 