import { enableProdMode }           from "@angular/core";
import { platformBrowserDynamic }   from "@angular/platform-browser-dynamic";
import { AppModule }                from "./app/app.module";

console.log( "main.ts: running angular in jit mode" );
enableProdMode();
platformBrowserDynamic().bootstrapModule( AppModule );