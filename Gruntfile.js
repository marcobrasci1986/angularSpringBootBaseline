module.exports = function (grunt) {

    grunt.initConfig({
        clean: ['src/main/resources/static/build'],
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['clean','karma']);

};