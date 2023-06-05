const path = require("path");

isProduction = false;

/**@type import("webpack").Configuration */
module.exports.default = {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.js",
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "assets"),
            watch: true,
            staticOptions: {}
        },
        compress: true,
        port: 5080,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                resolve: {
                    fullySpecified: false,
                },
            },
        ],
    },
    resolve: {
        extensions: [".js"],
        alias: {
            fs: false,
            child_process: false
        }
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    }
};
