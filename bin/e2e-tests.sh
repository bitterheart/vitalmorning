#!/bin/bash
yum provides *bin/npm
yum provides *bin/grunt
sudo yum update -y
sudo yum install -y wget
if [ ! -f epel-release-7-1.noarch.rpm ]
then
    wget http://mirror.sfo12.us.leaseweb.net/epel/7/x86_64/e/epel-release-7-1.noarch.rpm
    sudo yum install -y epel-release-7-1.noarch.rpm || true
fi
sudo yum update -y
sudo yum -y install nodejs-grunt-cli npm Xvfb ImageMagick bzip2
if [ ! -f google-chrome-stable_current_x86_64.rpm ]
then
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
    sudo yum install -y google-chrome-stable_current_x86_64.rpm
fi
sudo yum update -y
npm install
if [ ! -d /tmp/.X99-lock ]
then
    Xvfb :99 -ac -screen 0 1024x768x24 &
    export DISPLAY=:99
fi
./node_modules/protractor/bin/webdriver-manager update --standalone  
grunt e2etests-ci