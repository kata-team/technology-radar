const timeGrunt = require('time-grunt');
const loadGruntConfig = require('load-grunt-config');

module.exports = grunt => {
    const data = {
        paths: {
            source: {
                root: 'src',
                stylesheets: '<%= paths.source.root %>/stylesheets',
                javascripts: '<%= paths.source.root %>/app',
                bower_components: '<%= paths.source.root %>/bower_components',
            },
            public: {
                root: 'public',
                stylesheets: '<%= paths.public.root %>/stylesheets',
                javascripts: '<%= paths.public.root %>/javascripts',
            },
        },
        bower: grunt.file.readJSON('bower.json'),
    };
    // require it at the top and pass in the grunt instance
    timeGrunt(grunt);
    loadGruntConfig(grunt, {
        data,
    });
};
