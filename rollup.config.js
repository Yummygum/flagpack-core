import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'


export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    name: 'flag-pack-core'
  },
  plugins: [,
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    json({ compact: true, })
  ]
};