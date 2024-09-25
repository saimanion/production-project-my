import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {ProgressPlugin} from "webpack";
import path from "path";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}:BuildOptions): webpack.WebpackPluginInstance[] {
    const HtmlWebpackPluginInstance = new HtmlWebpackPlugin({
        template: paths.html,
    })
    const ProgressPluginInstance = new ProgressPlugin()
    const MiniCssExtractPluginInstance =  new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:4].css'
    })
    return [
        HtmlWebpackPluginInstance,
        ProgressPluginInstance,
        MiniCssExtractPluginInstance
    ]
}