@ECHO off

REM Get rid of bullshit chars in webpack output. 
REM Appearently the following codepages do not work
REM
REM CHCP 65001
REM CHCP 473
REM CHCP 1252

SET Path=%CD%\node_v8.12.0_win-x64

ECHO Environment:

ECHO | SET /p="nodejs version: "
node -v

ECHO | SET /p="npm version:    "
npm -version