# ET-Chat Material Generation
Entstanden aus dem Chatsystem ["ET – Chat v3.x"](http://www.sedesign.de/de_produkte_chat-v3.html) programmiert in PHP und JavaScript.<br />
Die Copyrights für ["ET – Chat v3.x"](http://www.sedesign.de/de_produkte_chat-v3.html) liegen bei http://www.sedesign.de

## change-log (Änderungen)
* branch master set to version 4.0.0
* branched 3.0.7
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