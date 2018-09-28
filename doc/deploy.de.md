# Deployment

## Links
[Voraussetzungen](requirements.de.md)

## Vorbereitungen
Siehe: [Voraussetzungen](requirements.de.md)

### Sichern der bereits vorhandenen config.php Dateien
Falls es bereits funktionierende Installationen von ET-Chat v3.0.7 gibt, sollten die vorhanden config.php Dateien in das Verzeichnis PROJ_ROOT/config/deploy/config.php kopiert und umbenannt werden.

Beispiel:
Die config.php vom Testserver in test.config.php umbenennen.

Die Maßnahme ermöglicht es dem Deloymentscript später, die zum Deployment passende config.php auszuliefern.
(Wer es bevorzugt, der kann auch das Deploymentscript ändern und Unterordner verwenden...)

## Installation
Grundsätzlich wird während des Prozesses nichts installiert sondern nur kopiert. 
Das Verzeichnis PROJ_ROOT/node_modules wird ggf. automatisch angelegt.

Die Installation der Pakete für nodejs erfolgt nur lokal, d.h. im Verzeichnis PROJ_ROOT/node_modules

### Windows
Wenn die vorhandene Datei package.json verwendet werden soll, genügt der Klick auf den cmd-Link.
Anschließend der Aufruf von:
```cmd
npm install
```

Alternativ kann die Datei package.json gelöscht und package.dev in package.json umbenannt werden.
Nach einem Klick auf den cmd-Link wird aufgerufen:
```cmd
npm install --save-dev fs-extra
npm install --save-dev rimraf
```

## Deployment

### Erstellen bzw. Anpassen der Deployment-Konfiguration
Die Datei PROJ_ROOT/config/deploy/deploy.config.json sollte Einträge für die verschiedenen Deployment-Szenarien
enthalten. Die Deployment-Szenarien im folgenden Beislpiel heißen <code>"prepare", "install", "test" und "prod"</code>.
```json
{
  "prepare": {
      "type":      "prepare"
  },
  "install": {
      "htdocs":    "C:/Program Files/Apache/2.4.35/htdocs",
      "app":       "et_chat"
  },
  "test": {
      "style":     {
		     "deploy": [ "black", "blue", "green", "white" ],
		     "dflt":   "white"
		   },
      "htdocs":    "C:/Program Files/Apache/2.4.35/htdocs",
      "app":       "et_chat"
  },
  "prod": {
      "server":    "myhost",
      "user":      "www",
      "passwd":    "<my-very-own-www-passwd>",
      "ttype":     "pscp",
      "htdocs":    "/var/www",
      "app":       "et_chat",
      "phpconfig": "prod/config.php"
  }
}
```
#### htdocs
Das Document-Root des verwendeten Webservers.

#### app
Ein Verzeichnis, das sich unterhalb des Document-Roots befindet.
In diesen Ordner werden die Deployment-Unterordner und Dateien kopiert.

#### phpconfig (optional)
Dieser Eintrag wird vom Szenario "install" nicht berücksichtigt.

Wenn dieser Eintrag nicht existiert, geht das Script davon aus, dass sich die für das Deployment nötige config.php im Ordner PROJ_ROOT/config/php befindet
und dem Namensmuster des Deployments entspricht. 

D.h.: Die Datei heisst <code>test.config.php</code> im Falle eines "test" Deployments oder <code>prod.config.php</code> im Falle eines "prod" Deployments.

In Fällen, in denen "phpconfig" einen Wert zugewiesen bekommt, sind die Dateinamen oder Pfadangaben relativ zum Ordner PROJ_ROOT/config/php zu machen.

### style (optional)
#### style.deploy (optional)
Ein Array, das alle Styles enthält, die auf den Server deployed werden sollen.

Falls das Element nicht vorhanden oder das zugewiesene Array leer ist, werden keine Styles deployed.

#### style.dflt (optional)
Der Style, der als Standard zur Verfügung gestellt werden soll.

Falls das Element nicht vorhanden ist, wird "white" als Standardwert verwendet.

#### type (optional)
Wenn der Eintrag "type" auf "prepare" gesetzt wird, wird das Deployment nach der Vorbereitung aller Dateien beendet.

Unter Proj_ROOT/deploy/&lt;target&gt; befindet sich nach dem Deployment-Lauf eine komplette Ordnerstuktur, die manuell auf das Zielsystem übertragen werden kann.

### Ausführen eines Deployments
Nach einem Klick auf den cmd-Link und dem [Vorbereiten der Javascript-Dateien](webpack.de.md), lässt sich das
Deployment wie folgt starten:

```cmd
node config/deploy/deploy --test
```

Das Script arbeitet zur Zeit rudimentär und geht davon aus, dass sich Sourcen und Server auf einem Rechner
befinden. Es findet also nur ein Kopieren von Dateien statt.
