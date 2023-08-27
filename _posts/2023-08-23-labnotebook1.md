---
title: Lab Notebook 1
author: david
categories: ['Lab Notebook']
tags: ['Linux', 'Bash', 'Web Dev']
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
    Description:	Ubuntu 20.04.6 LTS
    Release:	20.04
    Codename:	focal
    
    Getting Github Info:
    DavidVasilev1
    davidkvasilev@gmail.com
    
    Testing Python:
    Python is already installed.
    Python 3.9.12
    
    Testing Ruby:
    Ruby is already installed.
    ruby 3.0.5p211 (2022-11-24 revision ba5cf0f7c5) [x86_64-linux]
    
    Testing Jupyter:
    Jupyter is already installed.
    Selected Jupyter core packages...
    IPython          : 8.2.0
    ipykernel        : 6.9.1
    ipywidgets       : 7.6.5
    jupyter_client   : 6.1.12
    jupyter_core     : 4.9.2
    jupyter_server   : 1.13.5
    jupyterlab       : 3.3.2
    nbclient         : 0.5.13
    nbconvert        : 6.4.4
    nbformat         : 5.3.0
    notebook         : 6.4.8
    qtconsole        : 5.3.0
    traitlets        : 5.1.1
    Available kernels:
      bash          /home/davidv/.local/share/jupyter/kernels/bash
      javascript    /home/davidv/.local/share/jupyter/kernels/javascript
      python3       /home/davidv/.local/share/jupyter/kernels/python3
    
    Testing Bundler:
    Bundler is already installed.
    Bundler version 2.2.33
    


## Java Hello


