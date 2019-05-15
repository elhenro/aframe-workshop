#!/bin/bash
git clone https://github.com/networked-aframe/networked-aframe
cd networked-aframe
npm install
npm run easyrtc-install
npm run dev
