/** ******************************************************************************************************
 *
 *  webpack.development.config.json
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

/**
 *  Require "html-webpack-plugin" to generate index.htm from index.ejs
 */
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
/**
 *  Require "webpack-bundle-analyzer" to get an interactive treemap visualization
 *  of the contents of all bundles.
 */
const BundleAnalyzerPlugin = require( "webpack-bundle-analyzer" ).BundleAnalyzerPlugin;
/**
 *  Since webpack 4 use mini-css-extract-plugin for css
 */
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );

// use function to access arguments passed to webpack
module.exports = function( env, argv ) {

  const base = require( "./webpack.base.config" )( env, argv );
  
  return {
    // The point or points to enter the application. At this point the application
    // starts executing. If an array is passed all items will be executed and bundled
    // by webpack. Defaults to ./src
    entry: base.entry(),

    // options related to how webpack emits results
    output: {
      // the target directory for all output files
      // must be an absolute path (use the Node.js path module)
      // ... relative to directory of current config file.
      path: base.distributionDirectory(),

      // the filename template for entry chunks
      // defaults to main.js
      // filename: "bundle.js", // string
      // filename: "[name].js", // for multiple entry points
      // filename: "[chunkhash].js", // for long term caching
      filename: "js/[name].js",

      // the url to the output directory resolved relative to the HTML page
      // this is the server directory where the resulting js-files are to be found
      // publicPath: "",
      // publicPath: "https://cdn.example.com/",

      // the name of the exported library
      // library: "packed", // string,

      // the type of the exported library
      // libraryTarget: "umd",       // universal module definition
      // libraryTarget: "umd2",      // universal module definition
      // libraryTarget: "commonjs2", // exported with module.exports
      // libraryTarget: "commonjs",  // exported as properties to exports
      // libraryTarget: "amd",       // defined with AMD defined method
      // libraryTarget: "this",      // property set on this
      // libraryTarget: "var",       // variable defined in root scope
      // libraryTarget: "assign",    // blind assignment
      // libraryTarget: "window",    // property set to window object
      // libraryTarget: "global",    // property set to global object
      // libraryTarget: "jsonp",     // jsonp wrapper

      // include useful path info about modules, exports, requests, etc. into the generated code
      pathinfo: true, // boolean

      // the filename template for additional chunks
      // chunkFilename: "[chunkhash].js", // for long term caching
      // chunkFilename: "[id].js",

      // name of the JSONP function used to load chunks
      // jsonpFunction: "myWebpackJsonp", // string
      
      // the filename template of the source map location
      // sourceMapFilename: "[file].map", // string
      sourceMapFilename: "js/sourcemaps/[file].map", // string
    },
    // use default resolver configuration of basic webpack configuration
    resolve: base.resolve,
    // generate source map using original source
    // devtool: "#source-map",
    devtool: "#cheap-module-source-map",
    plugins: [
      // Use HtmlWebpackPlugin to generate index.html in projectroot/dist
      new HtmlWebpackPlugin({
        template:   base.sourceDirectory( "index.ejs" ),
        title:      "Change Title",
        inject:     false,
        minify:     false,
        app:        {
                      version:  "4.0.0"
                    }
      }) /* ,
      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
      }) */
      // new BundleAnalyzerPlugin()
    ],
    module: {
      rules: [
        { // loader used for typescript files
          test:     /\.ts$/,
          // include: ts files in source directory and its subdirectories only (filter!)
          include:  base.sourceDirectory(),
          use:      [{
                        // Loads and transpiles typescript.
                        loader: "awesome-typescript-loader"
                    }]
        },{
          test:     /\.html$/,
          // include: html files in source/app directory and its subdirectories only (filter!)
          //          note: this prevents index.html from getting modified.
          include:  base.sourceDirectory( "app" ),
          use:      [{
                        // Exports HTML as string
                        // do not minimize html templates... will f'up angular module directives.
                        loader:   "html-loader",
                        options:  {
                                      minimize: false
                                  }
                    }]
        },{
          test:     /\.(png|jpe?g|gif|svg|ico)$/,
          // include: images in source directory and its subdirectories only (filter!)
          include:  base.sourceDirectory(),
          use:      [{
                        // check for file from import statement:
                        //    import img from './file.png'
                        // the file will be emitted in the output directories public path (public url)
                        // the public path is inherited from webpack and can be overwritten
                        loader:   "file-loader",
                        options:  {
                                      name:     "name=[name].[ext]"
                                  }
                    }]
        },{
          test:     /\.(woff|woff2|ttf|eot)$/,
          // include: any fonts in project directory and subdirectories
          include:  base.sourceDirectory(),
          use:      [{
                        // check for file from import statement: import font from './arial.ttf'
                        // see above
                        loader:   "file-loader",
                        options:  {
                                      name:     "name=[name].[ext]"
                                  }
                    }]
        },{
          test:     /\.css$/,
          // include: any css in project directory and subdirectories
          use:      [{ 
                        loader: "style-loader" 
                     },{
                        loader: "css-loader",
                        options:  {
                                      sourceMap: true
                                  }
                    }]
        },{
          test:     /\.scss$/,
          // include: any scss in project directory and subdirectories
          use:      [{
                        loader:   "css-loader",
                        options:  {
                                      sourceMap: true
                                  }
                    },{
                        loader:   "sass-loader",
                        options:  {
                                      sourceMap: true
                                  }
                    }]
        }

      ]
    },
    optimization: {
      minimize: true
    }
  }
}