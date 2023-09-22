import path from "path";
import webpack from "webpack";
import { BuildMode, BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";

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
    resolve: buildResolve()
  }
}