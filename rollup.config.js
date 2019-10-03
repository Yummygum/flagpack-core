import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve';
import smartAsset from 'rollup-plugin-smart-asset'

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    name: 'flagpack-core'
  },
  plugins: [
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
      keepImport: true
    })
  ]
};
