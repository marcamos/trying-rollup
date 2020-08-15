import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        exports: 'default',
        file: 'dist/index.min.js',
        format: 'cjs',
        plugins: [terser()]
    }
};
