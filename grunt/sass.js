module.exports = {
    dist: {
        options: {
            sourceMap: true,
        },
        files: [{
            expand: true,
            cwd: '<%= paths.source.stylesheets %>',
            src: ['*.sass', '*.scss'],
            dest: '<%= paths.public.stylesheets %>',
            ext: '.css',
        }]
    },
};
