@ECHO off

SET Path=.\node_v8.12.0_win-x64

ECHO Environment:

ECHO | SET /p="nodejs version: "
node -v

ECHO | SET /p="npm version:    "
npm -version