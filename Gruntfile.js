module.exports = function (grunt) {

    grunt.initConfig({
        clean: [
            'src/main/resources/static/build',
            './build/aft'

        ]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['clean', 'karma']);

};