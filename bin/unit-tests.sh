#!/bin/bash
sudo yum update -y
if [ ! -f epel-release-7-2.noarch.rpm ]
then
    wget http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-2.noarch.rpm
    sudo yum install -y epel-release-7-2.noarch.rpm
    sudo yum update -y
fi
sudo yum -y install nodejs-grunt-cli npm bzip2
npm install
grunt unit-tests-ci
