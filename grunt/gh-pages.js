module.exports = {
    options: {
        base: 'public',
        branch: 'gh-pages',
        user: {
            name: 'Marco Montalbano',
            email: 'marcomontalbano.work@gmail.com'
        },
        message: 'Deploy to GitHub Pages.'
    },
    local: {
        src: ['**']
    },
    travis: {
        options: {
            repo: 'https://' + process.env.GH_TOKEN + '@github.com/kata-team/technology-radar.git'
        },
        src: ['**']
    }
};
