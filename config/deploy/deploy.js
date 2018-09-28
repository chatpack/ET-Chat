/**
 *  Simple deployment script
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 *  LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 *  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 *  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 *  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
const DEBUG   = false;

function log( message ) {
  console.log ( message );
}
function dbg( message ) {
  if ( DEBUG ) { log ( message ); }
}

const config  = require( "./deploy.config" );
const tpeprm  = process.argv.slice( 2, 3 );

log( "deploy with arguments: '" + tpeprm + "'\n" );
dbg( "deploy configuration:  " + JSON.stringify( config ));

const fs      = require( "fs" );
const fse     = require( "fs-extra" );
const path    = require( "path" );

const CHTPATH = "./et_chat";
const DPLPATH = "./deploy";

const ERRMSG  = "Deployment destination not modified. Deployment failed.";
const DONE    = "... done\n";
const INSTALL = "install";
const PREPARE = "prepare";
const JS      = "js";

let deploytype = (( tpeprm ) ? String( tpeprm ).toLowerCase().replace( /-/g, "" ).trim() : "install" );
let deploycfg  = config[ deploytype ];
dbg( "deploy configuration fragment:  " + JSON.stringify( deploycfg ));

if ( ! deploycfg ) {
     console.error( "Cannot deploy. File 'deploy.config' - missing entry '" + deploytype + "':" );
     console.error( JSON.stringify( config ));
     console.error( ERRMSG );
     process.exit(1);
}

const DST    = path.resolve( DPLPATH, deploytype );
const JSDST  = path.resolve( DST, JS );
const JSSRC  = path.resolve( DPLPATH, JS );
const CHTSRC = path.resolve( CHTPATH );

/* ############################################################### **
 *
 *  Prepare deployment directory.
 *
 * ############################################################### */
log( "Preparing deployment - directory." );
try {
    dbg( "... destination directory: '" + DST + "'" );
    if ( ! fs.existsSync( DPLPATH )) {
         dbg( "... creating deployment directory." );
         fs.mkdirSync( DPLPATH );
    }
    if ( fs.existsSync( DST )) {
         dbg( "... removing previous directory structure and files" );
         let rimraf = require( "rimraf" );
             rimraf.sync( DST );
    }
    if ( ! fs.existsSync( DST )) {
         dbg( "... creating target directory." );
         fs.mkdirSync( DST );
    }
    log( DONE );
}
catch( err ) {
       console.error( err ); 
       console.error( ERRMSG );
       process.exit(1);
}

/* ############################################################### **
 *
 *  Copy templates to deployment directory.
 *
 * ############################################################### */
log( "Preparing deployment - copying file templates." );
try {
    dbg( "... from: '" + CHTSRC + "' to: '" + DST + "'" );
    fse.copySync( CHTSRC, DST );
    log( DONE );
}
catch( err ) {
       console.error( err ); 
       console.error( ERRMSG );
       process.exit(1);
}

/* ############################################################### **
 *
 *  Copy jsvascript to deployment directory.
 *
 * ############################################################### */
log( "Preparing deployment - copying javascript files." );
try {
    dbg( "... from: '" + JSSRC + "' to: '" + JSDST + "'" );
    fse.copySync( JSSRC, JSDST );
    log( DONE );
}
catch( err ) {
       console.error( err ); 
       console.error( ERRMSG );
       process.exit(1);
}

/* ############################################################### **
 *
 *  Copy config.php to deployment directory.
 *
 * ############################################################### */
try {
    if ( deploytype === INSTALL ) {
         log( "Preparing deployment - copying install templates." );

         let src = CHTPATH + "_" + INSTALL;
         log( "... from: '" + src + "' to: '" + DST + "'" );
       
         fse.copySync( src, DST );
         console.log( DONE );
    }
    else {
         log( "Preparing deployment - copying config.php." );

         const cfgphp = "config.php";

         // get source file for config.php
         let src = null;
         if ( deploycfg.phpconfig ) {
              src = path.resolve( DPLPATH, deploytype );
         }
         else src = path.resolve( "./config/php/" + deploytype + "." + cfgphp );

         // check if source file of config.php exists
         if ( ! fs.existsSync( src )) {
              console.error( "Missing required " + cfgphp + " template: File '" + src + "' does not exist." ); 
              console.error( ERRMSG );
              process.exit(1);
         }

         let dst = path.resolve( DST, cfgphp );
         dbg( "... from: '" + src + "'" );
         dbg( "... to:   '" + dst + "'" );
         fse.copySync( src, dst );
         log( DONE );
    }
}
catch( err ) {
       console.error( err ); 
       console.error( ERRMSG );
       process.exit(1);
}

/* ############################################################### **
 *
 *  Exit, if deployment is only to be prepared.
 *
 * ############################################################### */
if (( deploycfg.type ) && ( deploycfg.type === PREPARE )) {
      console.log( "Deployment preparations succeeded for target '" + deploytype + "'" );
      console.log( "Done." );
      return 0;
}

/* ############################################################### **
 *
 *  Prepare target directory
 *
 * ############################################################### */
log( "Preparing target - directory." );
try {
    let dst = null;
    if ( ! deploycfg.htdocs ) {
         throw new Error( "deploy.config.json - entity '" + deploytype + "' missing member 'htdocs'" );
    }
    else if ( ! deploycfg.app ) {
         throw new Error( "deploy.config.json - entity '" + deploytype + "' missing member 'app'" );
    }
    else dst = path.resolve( deploycfg.htdocs, deploycfg.app );

    log( "... target directory: '" + dst + "'" );
    if ( ! fs.existsSync( dst )) {
         dbg( "... creating target directory." );
         fs.mkdirSync( dst );
    }
    if ( fs.existsSync( dst )) {
         dbg( "... removing previous directory structure and files" );
         let rimraf = require( "rimraf" );
             rimraf.sync( dst );
    }
    if ( ! fs.existsSync( dst )) {
         dbg( "... creating target directory." );
         fs.mkdirSync( dst );
    }
    log( DONE );
}
catch( err ) {
       console.error( err ); 
       process.exit(1);
}

/* ############################################################### **
 *
 *  Copy deployment files to target directory.
 *
 * ############################################################### */
log( "Preparing target - copying deployment files." );
try {
    let src = path.resolve( DPLPATH, deploytype );
    let dst = path.resolve( deploycfg.htdocs, deploycfg.app );

    log( "... from: '" + src + "' to: '" + dst + "'" );
    fse.copySync( src, dst );
    log( DONE );
}
catch( err ) {
       console.error( err ); 
       process.exit(1);
}
