module.exports = {
    uikit: {
        files: [
            {expand: true, cwd: '<%= paths.source.bower_components %>/uikit/src/images/', src: ['**'], dest: '<%= paths.public.stylesheets %>/images/uikit/'},
        ],
    },
};
