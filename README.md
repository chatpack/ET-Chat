# ET-Chat
Entstanden aus dem Chatsystem ["ET – Chat v3.x"](http://www.sedesign.de/de_produkte_chat-v3.html) programmiert in PHP und JavaScript.<br />
Die Copyrights für ["ET – Chat v3.x"](http://www.sedesign.de/de_produkte_chat-v3.html) liegen bei http://www.sedesign.de

## Unterschiede zu ["ET – Chat v3.x"](http://www.sedesign.de/de_produkte_chat-v3.html)
* Beim Deployment werden nur noch die verwendeten Styles auf dem Server hinterlegt.
* Es gibt einen offensichtlichen "Default" Style.
* Alle Javascript-Framworks wurden in vendor.js zusammengeführt.

## Dokumentation
* [Voraussetzungen](doc/requirements.de.md)
* [Webpack](doc/webpack.de.md)
* [Deployment](doc/deploy.de.md)

## change-log (Änderungen)
* summary: fully back online
* fixed the style.css scripts
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