module.exports = {
    production: {
        files: {
            'public/': 'public/index.html',
        },
        options: {
            replacements: [{
                pattern: /\/app/g,
                replacement: '/app.min',
            }],
        },
    },
};
