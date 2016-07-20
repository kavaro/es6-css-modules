module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'src/**/*Spec.js', ignore: true},
            {pattern: 'src/**/*.js'}
        ],

        tests: [
            {pattern: 'src/**/*Spec.js'}
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel()
        },

        env: {
            type: 'node',
            runner: 'node'  // or full path to any node executable
        }
    };
};