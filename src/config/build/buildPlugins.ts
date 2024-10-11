import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { ProgressPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }:BuildOptions): webpack.WebpackPluginInstance[] {
  const HtmlWebpackPluginInstance = new HtmlWebpackPlugin({
    template: paths.html,
  });

  const ProgressPluginInstance = new ProgressPlugin();

  const MiniCssExtractPluginInstance = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: '[name].[contenthash:4].css',
  });

  const DefinePluginInstance = new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  });

  const HotModuleReplacementPluginInstance = new webpack.HotModuleReplacementPlugin({});
  const BundleAnalyzerPluginInstance = new BundleAnalyzerPlugin({
    openAnalyzer: false,
  });
  // const ReactRefreshPluginInstance = [isDev && new ReactRefreshPlugin()].filter(Boolean);

  // eslint-disable-next-line no-sparse-arrays
  const plugins = [
    HtmlWebpackPluginInstance,
    ProgressPluginInstance,
    MiniCssExtractPluginInstance,
    DefinePluginInstance,,
    BundleAnalyzerPluginInstance,
  ];
  if (isDev) {
    plugins.push(
      HotModuleReplacementPluginInstance,
      BundleAnalyzerPluginInstance,
    );
  }

  return plugins;
}
