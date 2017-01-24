module.exports = function(grunt)
{ 
    var data = {
        //
        paths: {
            source: {
                root: 'src',
                stylesheets: '<%= paths.source.root %>/stylesheets',
                javascripts: '<%= paths.source.root %>/app',
            },
            public: {
                root: 'public',
                stylesheets: '<%= paths.public.root %>/stylesheets',
                javascripts: '<%= paths.public.root %>/javascripts',
            },
            docs: {
                root: 'docs',
            }
        },
        //
        bower: grunt.file.readJSON('bower.json'),
        //
    };
    // require it at the top and pass in the grunt instance
    require('time-grunt')(grunt);
    // 
    require('load-grunt-config')(grunt, {
        data
    });
};
