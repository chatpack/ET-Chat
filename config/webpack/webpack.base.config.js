/** ******************************************************************************************************
 *
 *  webpack.base.config.json
 *
 *  Provide any webpack configuration with basic information about project paths, sources and destinations.
 *
 *  © 2018 ch4tp4ck
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 *  LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 *  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 *  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 *  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 ******************************************************************************************************* */

const path = require( "path" );

const DEPLOY = "deploy";
const DIST   = "dist";
const SRC    = "src";

// use function to access arguments passed to webpack
module.exports = function( env, argv ) {
  // set environment depending on argv.mode
  if ( argv.mode ) {
       process.env.NODE_ENV = argv.mode;
  }

  var retval = {
    /**
     *  Set projectroot.
     *  Note: webpack.base.config.js should be located in PROJ_ROOT/config/webpack
     */
    projectroot:  path.resolve( __dirname, "..", ".." ),

    /**
     *  Return a canonical path to the relative directory specified by args.
     *
     *  Example:
     *    projectroot: C:\proot
     *
     *    var dir1 = directory( "src\js" );
     *    var dir2 = directory( "src", "js" );
     *
     *  Result on windows:
     *    dir1: "C:\proot\src\js"
     *    dir2: "C:\proot\src\js"
     *
     *  @args one or more arguments, holding one ore a series of path nodes, which
     *        will be appended to the projetcs root path.
     *        Note: The functions parameter 'args' is symbolic and never used.
     *              The functions internal array of arguments is handled instead.
     *
     *  @return a canonical path to the project directory specified by args.
     */
    directory:  function directory( args ) {
        let allargs = Array.prototype.slice.call( arguments, 0 );
            allargs.unshift( this.projectroot );
        return path.resolve.apply( path, allargs );
    },

    /**
     *  Return a canonical path to the projects distribution directory.
     *
     *  @args one or more arguments, holding one ore a series of path nodes, which
     *        will be appended to the projetcs distribution path.
     *        Note: The functions parameter 'args' is symbolic and never used.
     *              The functions internal array of arguments is handled instead.
     *
     *  @return a canonical path to the projects distribution directory,
     *          specified by args.
     */
    distributionDirectory: function distributionDirectory( args ) {
        let allargs = Array.prototype.slice.call( arguments, 0 );
        return this.directory.apply( this, [DIST].concat( allargs ));
    },

    /**
     *  Return a canonical path to the projects source directory.
     *
     *  @args one or more arguments, holding one ore a series of path nodes, which
     *        will be appended to the projetcs distribution path.
     *        Note: The functions parameter 'args' is symbolic and never used.
     *              The functions internal array of arguments is handled instead.
     *
     *  @return a canonical path to the projects distribution directory,
     *          specified by args.
     */
    sourceDirectory:  function sourceDirectory( args ) {
        let allargs = Array.prototype.slice.call( arguments, 0 );            
        return this.directory.apply( this, [SRC].concat( allargs ));
    },

    /**
     *  Sort webpack chunks in alphabetical order, but ...
     *    - put polyfill in first place
     *    - put vendor inbetween polyfill and main
     *    - put main in last place
     *
     *  @param  a
     *          chunk a
     *  @param  b
     *          chunk b
     */
    sortChunks: function sortChunks( a, b ) {  
        // console.log ( "-> " + a.names[0] + " - " + b.names[0] );
        if ( a.names[0] == this.chunkNamePolyfill ) {
           // set polyfill in first place - always.
           return -1;
        }
        else if ( b.names[0] == this.chunkNamePolyfill ) {
           // set polyfill in first place - always.
           return 1;
        }
        // do not care about vendor - it will be placed
        // between polyfill and main...
        else if ( a.names[0] == this.chunkNameMain ) {
           // set main in last place - always.
           return 1;
        }
        else if ( b.names[0] == this.chunkNameMain ) {
           // set main in last place - always.
           return -1;
        }
        else if ( a.names[0] > b.names[0] ) {
           return -1;
        }
        else if ( a.names[0] < b.names[0] ) {
           return 1;
        }
        else return 0;
    },

    /**
     *  Define chunk names used by configuration.
     */
    chunkNameMain:     "main",
    chunkNamePolyfill: "polyfills",
    chunkNameVendor:   "vendor",

    /**
     *  Prepare entry, the point or points to enter the application. At this point
     *  the application starts executing. If an array is passed all items will be
     *  executed and bundled by webpack. Defaults to ./src
     *
     *  entry: "./app/entry", // string | object | array
     *  entry: {
     *    a: "./app/entry-a",
     *    b: ["./app/entry-b1", "./app/entry-b2"]
     *  },
     */
    entry: function entry() {
      let entry = { };
          entry[ this.chunkNamePolyfill ] = this.sourceDirectory( "polyfills.ts" );
          // entry[ this.chunkNameVendor ]	 = this.sourceDirectory( "vendor.ts" );
          entry[ this.chunkNameMain ]		  = this.sourceDirectory( "main.ts" );
       return entry;
    },

    /**
     *  Define default resolvings
     */
    resolve: {
      extensions: [ ".ts", ".js" ]
    },
  }
  // freeze the configuration to be returned (disable accidental modifications).
  Object.freeze( retval );
  return retval;
}