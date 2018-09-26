# Webpack

## Links
https://webpack.js.org/

https://nodejs.org/dist/v8.12.0/node-v8.12.0-win-x64.zip

https://nodejs.org/dist/v8.12.0/node-v8.12.0-win-x86.zip

## Voraussetzungen
Anm.: Die Entwicklung erfolgt z.Zt. auf einem 64Bit Windows System.

PROJ_ROOT bezeichnet systemübergreifend den Basisordner des Projektes.
Hier finden sich die Dateien license.txt, readme.md und package.json.

### Windows
Es muss ein nodejs vorhanden und die "path"-Variable zum nodejs-Verzeichnis gesetzt sein.
Zur Zeit wird von einem nodejs LTS 8.12.0 ausgegangen, das im PROJ_ROOT entpackt (nicht
installiert) wurde. Nach dem Entpacken ist die Datei env.bat anzupassen.
Im Speziellen der Name des nodejs-Verzeichnisses.

## Installation
Grundsätzlich wird während des Prozesses nichts installiert sondern nur kopiert. 
Das Verzeichnis PROJ_ROOT/node_modules wird dabei automatisch angelegt.

Die Installation von webpack erfolgt nur lokal, d.h. im Verzeichnis PROJ_ROOT/node_modules
Die Version von Webpack wurde zur Vereinheitlichung in der Datei package.json festgelegt.

### Windows
Wenn die vorhandene Datei package.json verwendet werden soll, genügt der Klick auf den cmd-Link.
Anschließend der Aufruf von:
```cmd
npm install
```

Alternativ kann die Datei package.json gelöscht und package.dev in package.json umbenannt werden.
Nach einem Klick auf den cmd-Link wird aufgerufen:
```cmd
npm install --save-dev webpack
npm install --save-dev webpack-cli</code>
```

## GIT
Abhängig von der verwendeten nodejs-Version sollte die Datei .gitignore angepasst werden.