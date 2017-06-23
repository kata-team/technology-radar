module.exports = {
    uikit: {
        files: [
            { expand: true, cwd: '<%= paths.source.node_modules %>/uikit/src/images/', src: ['**'], dest: '<%= paths.public.stylesheets %>/images/uikit/' },
        ],
    },
    font_awesome: {
        files: [
            { expand: true, cwd: '<%= paths.source.node_modules %>/font-awesome/fonts/', src: ['**'], dest: '<%= paths.public.stylesheets %>/fonts/font-awesome/' },
        ],
    },
    es5_shim: {
        files: [
            { expand: true, cwd: '<%= paths.source.node_modules %>/es5-shim/', src: ['**'], dest: '<%= paths.public.javascripts %>/es5-shim/' },
        ],
    },
};
