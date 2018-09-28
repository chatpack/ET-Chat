# Webpack

## Links
* [Webpack Homepage](https://webpack.js.org/)
* [Voraussetzungen](requirements.de.md)

## Vorbereitungen
Siehe: [Voraussetzungen](requirements.de.md)

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
npm install --save-dev webpack-cli
```

## Ausführen
Die Javascriptdateien für das Deploymentverzeichnis werden mittels <code>npm</code> erstellt.
Dazu verfügt die Datei package.json über den "script"-Eintrag <code>pack</code>
```cmd
npm run pack
```
Im Idealfall befinden sich die fertigen Javascriptdateien nun im Ordner PROJ_ROOT/et_chat/js.

Das gesamte Verzeichnis kann nun zum Testsystem (IIS/Apache/sonstwas) übertragen und getestet werden.

## GIT
Abhängig von der verwendeten nodejs-Version sollte die Datei .gitignore angepasst werden.