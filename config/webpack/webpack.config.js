/** ******************************************************************************************************
 *
 *  webpack.config.json
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

// use function to access arguments passed to webpack
module.exports = function( env, argv ) {
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  // mode {string}: [ "production" | "development" | "none" ]
  //
  // Note: ... inactive. 
  //       'mode' is passed into webpack by script, using npm commandline options.
  //        See package.json 'scripts'.
  console.log( "Running webpack in mode '" + ( argv.mode ? argv.mode : "unknown" ) + "'" );

  if ( argv.mode ) {
       return require( "./webpack." + argv.mode + ".config" )( env, argv );
  }
  else return { };
}