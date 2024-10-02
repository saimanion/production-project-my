import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    const fileLoader = {
            test: /\.(png|jpe?g|gif|woff2|woff)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        }

    const tsLoader =         {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: true,
                        localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]":"[hash:base64:8]",
                    }

                },
            },
            "sass-loader",
        ],
    }
    const bableLoader = {
        test: /\.(js|ts|jsx|tsx)/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                "plugins": [
                    [
                        "i18next-extract",
                        {
                            loacales: ['ru','en'],
                            keyAsDefaultValue: true,
                        }
                    ],
                ]
            }
        }
    }
    // const ReactRefreshLoader = {
    //     test: /\.[jt]sx?$/,
    //     exclude: /node_modules/,
    //     use: [
    //             {
    //                 loader: require.resolve('babel-loader'),
    //                 options: {
    //                     plugins: [options.isDev && require.resolve('react-refresh/babel')].filter(Boolean),
    //                 },
    //             }
    //         ]
    // }


    return [
        fileLoader,
        svgLoader,
        bableLoader,
        tsLoader,
        cssLoader,



        // ReactRefreshLoader
        ]
}