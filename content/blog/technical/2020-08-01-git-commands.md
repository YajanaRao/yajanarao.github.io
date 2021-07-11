---
title: "git Commands"
categories: commands-and-shortcuts
---

## Change your remote's URL

https://docs.github.com/en/github/using-git/changing-a-remotes-url

## Undo Last Git Commit with reset

```sh
git reset --soft HEAD~1
```

“HEAD~1” means that you want to reset the HEAD (the last commit) to one commit before in the log history.

## Rollback to commit

```sh
git reset 9ef9173
```

Using an absolute commit SHA1 value `9ef9173`

```sh
git reset current~2
```

Using a relative value -2 before the `current` tag
