---
title: "VIM Navigation"
categories: commands-and-shortcuts
---

# Navigation Commands

H – Go to the first line of current screen.
M – Go to the middle line of current screen.
L – Go to the last line of current screen.
ctrl+f – Jump forward one full screen.
ctrl+b – Jump backwards one full screen.
ctrl+d – Jump forward (down) a half screen.
ctrl+u – Jump back (up) one half screen.

# [vim-commentary](!https://github.com/tpope/vim-commentary)

- `gcc` to comment out a line (takes a count)
- `gc` to comment out the target of a motion (for example, gcap to comment out a paragraph), 
- `gc` in visual mode to comment out the selection 
- `gc` in operator pending mode to target a comment. 

# [FZF](!https://github.com/junegunn/fzf/blob/master/README-VIM.md)

- Look for files under current directory
`:FZF`

- Look for files under your home directory
`:FZF ~`

- With fzf command-line options
`:FZF --reverse --info=inline /tmp`

- Bang version starts fzf in fullscreen mode
`:FZF!`