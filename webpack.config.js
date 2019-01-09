const PATH = require("path");
module.exports = {
    // devtool : "eval-source-map",
    entry : "./src/index.js",
    output : {
        path : PATH.resolve(__dirname,"public"),
        filename : "bundle.js"
    },
    devServer : {
        contentBase : "./public",
        port : 8888,
        inline : true,
        historyApiFallback : true
    },
    module : {
        rules : [
            {
                test : /(\.js|\.jsx)$/,
                loader : "babel-loader",
                exclude : /node_modules/
            }
        ]
    }
}
