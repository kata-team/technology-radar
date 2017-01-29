module.exports = {
    dist: {
        options: {
            sourceMap: false,
        },
        files: [
            {
                expand: true,
                cwd: '<%= paths.public.stylesheets %>',
                src: ['*.css', '!*.min.css'],
                dest: '<%= paths.public.stylesheets %>',
                ext: '.min.css',
            },
        ],
    },
};
