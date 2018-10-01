const path = require('path');

module.exports = {

  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  mode: "production", // "production" | "development" | "none"
                      // "production": enable many optimizations for production builds
                      // "development": enabled useful tools for development
                      // "none": no defaults

  // The base directory, an absolute path, for resolving entry points and loaders from configuration.
  // By default the current directory is used, but it's recommended to pass a value in your configuration. 
  // This makes your configuration independent from CWD (current working directory).
  // context: path.resolve( __dirname, 'app' ),

  // The point or points to enter the application. At this point the application starts executing. 
  // If an array is passed all items will be executed and bundled by webpack.
  // defaults to ./src
  // entry: "./app/entry", // string | object | array
  // entry: {
  //   a: "./app/entry-a",
  //   b: ["./app/entry-b1", "./app/entry-b2"]
  // },
  entry: { 
    index:  "./src/login",
    chat:   [ "./src/chat",
              "./src/window"         // chatwindows
            ],
    vendor: [ "./src/prototype",     // required by scriptaculous
              "./src/scriptaculous", // the highness itself
              "./src/builder",       // required by scriptaculous
              "./src/effects",       // required by scriptaculous
              "./src/dragdrop",      // required by scriptaculous
              "./src/controls",      // required by scriptaculous
              "./src/slider",        // required by scriptaculous
              "./src/sound"          // required by scriptaculous
           ]
  },
  // options related to how webpack emits results
  output: {
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    // ... relative to directory of current config file.
    path: path.resolve( __dirname, "..", "..", "deploy", "js" ),

    // the filename template for entry chunks
    // defaults to main.js
    // filename: "bundle.js", // string
    // filename: "[name].js", // for multiple entry points
    // filename: "[chunkhash].js", // for long term caching

    // the url to the output directory resolved relative to the HTML page
    // this is the server directory where the resulting js-files are to be found
    // publicPath: "",
    // publicPath: "https://cdn.example.com/",
    publicPath: "/js/", // string

    // the name of the exported library
    // library: "packed", // string,

    // the type of the exported library
    // libraryTarget: "umd", // universal module definition
    // libraryTarget: "umd2", // universal module definition
    // libraryTarget: "commonjs2", // exported with module.exports
    // libraryTarget: "commonjs", // exported as properties to exports
    // libraryTarget: "amd", // defined with AMD defined method
    // libraryTarget: "this", // property set on this
    // libraryTarget: "var", // variable defined in root scope
    // libraryTarget: "assign", // blind assignment
    // libraryTarget: "window", // property set to window object
    // libraryTarget: "global", // property set to global object
    libraryTarget: "jsonp", // jsonp wrapper

    // include useful path info about modules, exports, requests, etc. into the generated cod
    pathinfo: true, // boolean

    // the filename template for additional chunks
    // chunkFilename: "[chunkhash].js", // for long term caching
    chunkFilename: "[id].js",

    // name of the JSONP function used to load chunks
    // jsonpFunction: "myWebpackJsonp", // string
    
    // the filename template of the source map location
    // sourceMapFilename: "[file].map", // string
    sourceMapFilename: "sourcemaps/[file].map", // string

    // the name template for modules in a devtool
    // devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string

    // the name template for modules in a devtool (used for conflicts)
    // devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string

    // use a named AMD module in UMD library
    // umdNamedDefine: true, // boolean

    // specifies how cross origin request are issued by the runtime
    // crossOriginLoading: "use-credentials", // enum
    // crossOriginLoading: "anonymous",
    // crossOriginLoading: false,
    
    /* Expert output configuration (on own risk) */
    // use a simple 1:1 mapped SourceMaps for these modules (faster)
    // devtoolLineToLine: {
    //   test: /\.jsx$/
    // },
    
    // filename template for HMR manifest
    // hotUpdateMainFilename: "[hash].hot-update.json", // string
    
    // filename template for HMR chunks
    // hotUpdateChunkFilename: "[id].[hash].hot-update.js", // string
        
    // prefix module sources in bundle for better readablitity
    // sourcePrefix: "\t", // string
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        enforce: 'pre',
        exclude: [ /node_modules/, /deploy/ ],
        use: [
          {
            loader:  'prettier-loader',
            options: {
              parser: "babylon" , // The default prettier parser (we might want 'flow' in future)
              printWidth: 80,     // Specify the length of line that the printer will wrap on.
              tabWidth: 2,        // Specify the number of spaces per indentation-level.
              useTabs: false,     // Indent lines with tabs instead of spaces.
              semi: true          // Print semicolons at the ends of statements.
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false
  }
}