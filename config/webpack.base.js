const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//导入复制文件夹的插件
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // 用对象的方式配置多个入口
    entry: {
        main: "./src/main.js"
    },
    output: {
        // 修改输出路径和文件名，[name]是动态的，读取entry的属性
        filename: "js/[name].bundle.js",			
        path: path.resolve(__dirname, "../dist")
    },
    // + 提取公共模块配置
    optimization: {
        splitChunks: {
            chunks: 'all'	// 提取所有文件的共同模块
        }
    },
    //  + 添加模块解释
    resolve: {
        alias: {
            // 1.以后@符号就是src目录
            '@': path.resolve(__dirname, "../src"),
            
        },
        // 2.省略导入模块时的后缀名。
        extensions: ['.js', '.json', '.vue']
    },
    // 模块加载器
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "vue-style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "vue-style-loader",
                    use: ["css-loader", "less-loader"]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader", 
                        options: {
                            publicPath: "./images/", 
                            outputPath: "images"
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
			},
    
            {
                test:/\.(ttf|eot|woff|woff2|svg)$/,
                use:['file-loader']
            }

        ]
    },

    plugins: [
        // 提取css样式到单独文件
        new ExtractTextPlugin("style/style2.css"),
		
        // 每次构建前清除dist目录
        new CleanWebpackPlugin(),
		
        // 自动生成index.html到dist
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        // vue加载器插件
        new VueLoaderPlugin(),
        
        new CopyPlugin([
            { from: 'static', to: 'static' },
        ])
    ]
}