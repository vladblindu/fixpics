import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import * as path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import dev from 'rollup-plugin-dev'
import {terser} from 'rollup-plugin-terser'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'

const preprocess = require('./svelte.config')

const production = !process.env.ROLLUP_WATCH
const PUBLIC = path.resolve('__public__')

const aliases = alias({
    resolve: ['.svelte', '.js'], //optional, by default this will just look for .js files or folders
    entries: [
        {find: 'components', replacement: 'src/components'},
        {find: 'views', replacement: 'src/views'},
        {find: 'assets', replacement: 'src/assets'},
        {find: 'config', replacement: '__config__'},
        {find: 'ext-comp', replacement:'../common/components'}
    ]
})

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: `${PUBLIC}/build/bundle.js`
    },
    plugins: [
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),

        json(),

        svelte({
            preprocess,
            emitCss: false,
            css: (css) => {
                css.write('bundle.css')
            }
        }),

        !production && dev({
            dirs: ['dist', PUBLIC],
            historyApiFallback: true,
            port: 8081,
            proxy: {
                '/cms': 'http://localhost:4649/source',
            }
        }),

        !production && livereload(PUBLIC),

        production && terser(),

        aliases
    ],
    watch: {
        clearScreen: false
    }
}