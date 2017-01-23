module.exports = {
    javascripts: {
        files: ['<%= paths.source.javascripts %>/**/*.js'],
        tasks: ['javascripts:dev'],
        options: {
            spawn: false,
        },
    },
    stylesheets: {
        files: [
            '<%= paths.source.stylesheets %>/**/*.css'  ,
            '<%= paths.source.stylesheets %>/**/*.scss' ,
            '<%= paths.source.stylesheets %>/**/*.sass' ,
        ],
        tasks: ['stylesheets:dev'],
        options: {
            spawn: false,
        },
    },
};
