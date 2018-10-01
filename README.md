# ET-Chat
Entstanden aus dem Chatsystem ["ET – Chat v3.x"](http://www.sedesign.de/de_produkte_chat-v3.html) programmiert in PHP und JavaScript.<br />
Die Copyrights für ["ET – Chat v3.x"](http://www.sedesign.de/de_produkte_chat-v3.html) liegen bei http://www.sedesign.de

## Im Entstehungsprozess.

<center><b>Noch gibt's hier kein Ergebnis, das fehlerfrei funktionieren würde.</b></center><br />
<center><b>Still under construction.</b></center>

## Dokumentation
* [Voraussetzungen](doc/requirements.de.md)
* [Webpack](doc/webpack.de.md)
* [Deployment](doc/deploy.de.md)

## change-log (Änderungen)
* summary: login works, chat works, chatlist works, windows open up but not fully functional yet.
* removed old source folder
* released deploymentscript
* moved install to PROJ_ROOT/et_chat_install
* moved styles to PROJ_ROOT/et_chat_styles
* modified PROJ_ROOT/src/chat.js (less vulnerable to simple hacks via webdeveloper tools)
* modified PROJ_ROOT/et_chat/styles/etchat_default/* to get things back online
* copied PROJ_ROOT/et_chat_v307/styles/etchat_white to PROJ_ROOT/et_chat/styles/etchat_default
* removed templates from PROJ_ROOT/et_chat/styles
* modified PROJ_ROOT/src/*.js to get things back online
* introduced webpack for bundling javascript files in PROJ_ROOT/src and deploying results in PROJ_ROOT/et_chat/js
* moved javascript from folder PROJ_ROOT/et_chat/js to PROJ_ROOT/src

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)