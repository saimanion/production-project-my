import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loader/buildCssLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(options.isDev);
  const bableLoader = {
    test: /\.(js|ts|jsx|tsx)/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              loacales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  return [
    fileLoader,
    svgLoader,
    bableLoader,
    tsLoader,
    cssLoader,

    // ReactRefreshLoader
  ];
}
