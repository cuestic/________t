#!/usr/bin/env zsh
#local return_code="%(?..%{$fg[red]%}%? ↵%{$reset_color%})"

setopt promptsubst

autoload -U add-zsh-hook

GREEN="%{$fg_bold[green]%}"
YELLOW="%{$fg_bold[yellow]%}"
MAGENTA="%{$fg_bold[magenta]%}"
WHITE="%{$fg_bold[white]%}"
BLUE="%{$fg_bold[blue]%}"
CYAN="%{$fg_bold[cyan]%}"
RED="%{$fg_bold[red]%}"
RESET="%{$reset_color%}"

PROMPT_SUCCESS_COLOR=$FG[117]
PROMPT_FAILURE_COLOR=$FG[124]
PROMPT_VCS_INFO_COLOR=$FG[242]
PROMPT_PROMPT=$FG[077]
GIT_DIRTY_COLOR=$FG[133]
GIT_CLEAN_COLOR=$FG[118]
GIT_PROMPT_INFO=$FG[012]

PROMPT='%{$PROMPT_SUCCESS_COLOR%}%{$BLUE%}𝚫 %{$BLUE%}%c%{$reset_color%}%{$GIT_PROMPT_INFO%}$(git_prompt_info)$(virtualenv_prompt_info)%{$GIT_DIRTY_COLOR%}$(git_prompt_status) %{$reset_color%}'

#RPS1="${return_code}"

ZSH_THEME_GIT_PROMPT_PREFIX="$YELLOW  "
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$CYAN%}"
ZSH_THEME_GIT_PROMPT_DIRTY=" %{$RED%}✗"
ZSH_THEME_GIT_PROMPT_CLEAN=" %{$GREEN%}○"

# ZSH_THEME_GIT_PROMPT_ADDED="%{$FG[082]%}✚%{$reset_color%}"
# ZSH_THEME_GIT_PROMPT_MODIFIED="%{$FG[166]%}✹%{$reset_color%}"
# ZSH_THEME_GIT_PROMPT_DELETED="%{$FG[160]%}✖%{$reset_color%}"
# ZSH_THEME_GIT_PROMPT_RENAMED="%{$FG[220]%}➜%{$reset_color%}"
# ZSH_THEME_GIT_PROMPT_UNMERGED="%{$FG[082]%}═%{$reset_color%}"
# ZSH_THEME_GIT_PROMPT_UNTRACKED="%{$FG[190]%}✭%{$reset_color%}"

ZSH_THEME_VIRTUALENV_PREFIX=" ["
ZSH_THEME_VIRTUALENV_SUFFIX="]"
