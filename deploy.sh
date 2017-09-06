#!/usr/bin/env bash

set -e

HOST="ftp.koendercksen.com"
UNAME="koendfc118"
PASS=$(pass show Work/versio_directadmin)
REMOTE_PATH="/domains/koendercksen.com/public_html/flowchart"

find . -type f -regex '.*.css\|.*.js\|.*.html' -exec curl -sS -u $UNAME:$PASS \
    --ftp-create-dirs -T {} ftp://$HOST$REMOTE_PATH/{} \; -exec echo $(basename {}) \;
