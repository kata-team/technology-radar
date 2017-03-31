module.exports = {
    production: {
        files: {
            'public/': 'public/index.html',
        },
        options: {
            replacements: [{
                pattern: /\/app\.([js|css])/g,
                replacement: '/app.min.$1',
            }],
        },
    },
};
