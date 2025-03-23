#!/bin/sh

#  ci_post_clone.sh
#  RNPasswordApp
#
#  Created by Alexander Tartmin on 23.03.2025.
#

echo "===== Installling CocoaPods ====="
export HOMEBREW_NO_INSTALL_CLEANUP=TRUE
brew install cocoapods
echo "===== Installing Node.js ====="
brew install node@22
brew link node@22

# Install dependencies
echo "===== Running npm install ====="
npm install
echo "===== Running pod install ====="
pod install
