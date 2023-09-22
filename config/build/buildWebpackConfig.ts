import path from "path";
import webpack from "webpack";
import { BuildMode, BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
  const {mode, paths} = options;
  return {
    mode,

    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolve(),
    devtool: "inline-source-map", // Вебпак делает карты исходного кода, по которым можно отследить ошибки. т.к файлов сборки бывает много и отследить ошибку сложно
    devServer: buildDevServer(options)
  }
}