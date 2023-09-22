import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[]{

  const TSLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    TSLoader
  ]
}