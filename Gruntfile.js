module.exports = function (grunt) {

    grunt.initConfig({
        clean: ['src/main/resources/static/build',
            './Reports/*.html',
            './Reports/*.json',
            './Reports/screenshot/*.png'

        ]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['clean', 'karma']);

};