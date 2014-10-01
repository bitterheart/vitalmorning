#!/bin/bash
sudo yum update -y
sudo yum -y install nodejs-grunt-cli npm bzip2
npm install
grunt unit-tests-ci
