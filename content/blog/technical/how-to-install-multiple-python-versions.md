---
title: How to install multiple python versions
date: "2020-08-15T22:40:32.169Z"
categories: technical-concepts
---

## For Mac OS

```shell
brew update
brew install pyenv
```

Add the following in the shell script `~/.bash_profile`

```shell
eval "$(pyenv init -)"
echo 'PATH=$(pyenv root)/shims:$PATH' >> ~/.zshrc
```

List versions using

```shell
pyenv versions
```

Install another python version using command

```shell
pyenv install 3.6.9
```

NOTE:
In case if you see any issue while installing the version checkout the following issue:
https://github.com/pyenv/pyenv/issues/1737

The solution would be:

```shell
CFLAGS="-I$(brew --prefix openssl)/include -I$(brew --prefix bzip2)/include -I$(brew --prefix readline)/include -I$(xcrun --show-sdk-path)/usr/include" LDFLAGS="-L$(brew --prefix openssl)/lib -L$(brew --prefix readline)/lib -L$(brew --prefix zlib)/lib -L$(brew --prefix bzip2)/lib" pyenv install --patch 3.6.9 < <(curl -sSL https://github.com/python/cpython/commit/8ea6353.patch\?full_index\=1)
```

To uninstall any version use the following command:

```shell
pyenv uninstall 3.6.0
```

To set specific python version in command line:

```shell
pyenv local 3.6.9
```

The virtual environment can be created using the following command now:

```shell
python3 -m venv venv
```

References:

- https://www.freecodecamp.org/news/manage-multiple-python-versions-and-virtual-environments-venv-pyenv-pyvenv-a29fb00c296f/
- https://github.com/pyenv/pyenv
- https://opensource.com/article/20/4/pyenv
