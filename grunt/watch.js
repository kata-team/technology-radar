module.exports = {
    javascripts: {
        files: [
            '<%= paths.source.javascripts %>/**/*.js',
            '<%= paths.source.javascripts %>/**/*.jsx',
        ],
        tasks: ['test', 'javascripts:dev'],
        options: {
            spawn: false,
        },
    },
    stylesheets: {
        files: [
            '<%= paths.source.stylesheets %>/**/*.css',
            '<%= paths.source.stylesheets %>/**/*.less',
            '<%= paths.source.stylesheets %>/**/*.scss',
            '<%= paths.source.stylesheets %>/**/*.sass',
        ],
        tasks: ['stylesheets:dev'],
        options: {
            spawn: false,
        },
    },
};
