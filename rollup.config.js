import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve';
import smartAsset from 'rollup-plugin-smart-asset'

import flagsModules from './flagsModules.json'

export default [{
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    name: '@flagpack/core'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    json({ compact: true, })
  ]
}, {
  input: flagsModules,
  output: {
    dir: 'dist/flags',
    format: 'esm',
    name: '@flagpack/flags'
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
      assetsPath: 'svg',
      useHash: true,
      keepImport: true
    })
  ]
}];
