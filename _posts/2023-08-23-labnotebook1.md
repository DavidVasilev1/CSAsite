---
title: Lab Notebook 1
author: david
categories: ['Lab Notebook']
tags: ['Linux', 'Bash']
week: 1
description: Week 1 lab work.
toc: True
comments: True
date: 2023-08-23 12:00:00 +0000
---

## Linux Shell Hacks and Notes

- commands are just what is used to navigate linux terminal
- ```echo``` - prints statements
- ```apt``` - "advanced package tool" used to install various files that are online
- ```if/else``` - these statements can be used in terminal too, to check if something is fulfilled
- ```-v/-version/--version``` - can be used to check the versions of what is installed, useful for debugging
- ```git``` - universal for any commands used for doing things with github
- ```gem``` - universal for install dependencies that are used by ruby

### Making Script File

Scripts can be made in order to install different things and also manipulate different things that are in Linux through the terminal. In order to make an executable script you can run:

- ```nano <filename>.sh``` - makes the file and allows you to add the code into that script, once done you can exit
  - ```ctrl+x``` - used to exit the nano file and allows you to save it

At this point your file is made but not executable so in order to make it executable you can:
- ```chmod +x <filename>.sh``` - this changes the permissions of the file in order to make it executable

After doing this you can run the file by running:
- ```./<filename>.sh``` - this basically open the file, however instead of entering the file, it runs the code inside the file


```python
%%script bash

echo "Finding Ubuntu Version:"
lsb_release -a
echo

echo "Getting Github Info:"
git config --global --get user.name
git config --global --get user.email
echo

echo "Testing Python:"
if command -v python3 &>/dev/null; then
    echo "Python is already installed."
    python3 --version
else
    echo "Installing Python..."
    sudo apt install -y python3
fi
echo

echo "Testing Ruby:"
if command -v ruby &>/dev/null; then
    echo "Ruby is already installed."
    ruby -v
else
    echo "Installing Ruby..."
    sudo apt install -y ruby-full build-essential zlib1g-dev
fi
echo

echo "Testing Jupyter:"
if command -v jupyter-notebook &>/dev/null; then
    echo "Jupyter is already installed."
    jupyter --version
    jupyter kernelspec list
else
    echo "Installing Jupyter..."
    sudo apt-get install -y jupyter-notebook
fi
echo

echo "Testing Bundler:"
if command -v jekyll bundler &>/dev/null; then
    echo "Bundler is already installed."
    bundler --version
else
    echo "Installing Bundler..."
    export GEM_HOME="$HOME/gems"
    export PATH="$HOME/gems/bin:$PATH"
    echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
    echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
    gem install jekyll bundler
fi
echo
```

    Finding Ubuntu Version:


    No LSB modules are available.


    Distributor ID:	Ubuntu
    Description:	Ubuntu 22.04.3 LTS
    Release:	22.04
    Codename:	jammy
    
    Getting Github Info:
    DavidVasilev1
    davidkvasilev@gmail.com
    
    Testing Python:
    Python is already installed.
    Python 3.11.4
    
    Testing Ruby:
    Ruby is already installed.
    ruby 3.0.2p107 (2021-07-07 revision 0db68f0233) [x86_64-linux-gnu]
    
    Testing Jupyter:
    Jupyter is already installed.
    Selected Jupyter core packages...
    IPython          : 8.12.0
    ipykernel        : 6.19.2
    ipywidgets       : 8.0.4
    jupyter_client   : 7.4.9
    jupyter_core     : 5.3.0
    jupyter_server   : 1.23.4
    jupyterlab       : 3.6.3
    nbclient         : 0.5.13
    nbconvert        : 6.5.4
    nbformat         : 5.7.0
    notebook         : 6.5.4
    qtconsole        : 5.4.2
    traitlets        : 5.7.1


    0.00s - Debugger warning: It seems that frozen modules are being used, which may
    0.00s - make the debugger miss breakpoints. Please pass -Xfrozen_modules=off
    0.00s - to python to disable frozen modules.
    0.00s - Note: Debugging will proceed. Set PYDEVD_DISABLE_FILE_VALIDATION=1 to disable this validation.


    Available kernels:
      java       /home/david/.local/share/jupyter/kernels/java
      python3    /home/david/anaconda3/share/jupyter/kernels/python3
    
    Testing Bundler:
    Bundler is already installed.
    Bundler version 2.4.19
    


## Java Hello


