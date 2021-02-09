import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import smartAsset from 'rollup-plugin-smart-asset'
import minify from 'rollup-plugin-babel-minify'
import pkg from './package.json'

const dev = 'development'
const prod = 'production'
const env = (process.env.NODE_ENV === prod || process.env.NODE_ENV === dev) ? process.env.NODE_ENV : dev

const plugins = [
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
  }),
  json({ compact: true, }),
  smartAsset({
    url: 'copy',
    assetsPath: 'flags',
    useHash: true,
    keepImport: true,
  })
]

if (env === prod) {
  // plugins.push(minify())
}

export default {
  plugins,
  input: [
    'index.js',
    'flags/allFlags.js'
  ],
  output: [
    {
      // file: pkg.main,
      format: 'cjs',
      name: 'flagpack-core',
      dir: 'dist',
      entryFileNames: '[name].[format].js'
    },
    {
      // file: pkg.module,
      format: 'es',
      name: 'flagpack-core',
      dir: 'dist',
      entryFileNames: '[name].esm.js'
    },
  ]
}
