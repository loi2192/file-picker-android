#!/usr/bin/env node

const os = require('os');
const path = require('path');
const fs = require('fs');

// Kiểm tra xem có đang trong iOS project không
function isIOSProject() {
  const cwd = process.cwd();
  const parentDirs = [cwd, path.dirname(cwd), path.dirname(path.dirname(cwd))];
  
  for (const dir of parentDirs) {
    if (fs.existsSync(path.join(dir, 'ios'))) {
      return true;
    }
    if (fs.existsSync(path.join(dir, 'platforms', 'ios'))) {
      return true;
    }
    if (fs.existsSync(path.join(dir, 'App.xcodeproj'))) {
      return true;
    }
  }
  return false;
}

// Chỉ cảnh báo, không fail
if (isIOSProject()) {
  console.warn('\n⚠️  WARNING: @capawesome/capacitor-file-picker is ANDROID-ONLY');
  console.warn('This plugin does not support iOS and should not be used in iOS builds.');
  console.warn('If you need file picker for iOS, please use a different plugin.\n');
} 