module.exports = {
    options: {
        base: 'public',
        dotfiles: true,
        branch: 'gh-pages',
        user: {
            name: 'Marco Montalbano',
            email: 'marcomontalbano.work@gmail.com',
        },
        message: 'Deploy to GitHub Pages.',
    },
    local: {
        src: ['**'],
    },
    travis: {
        options: {
            repo: `https://${process.env.GH_TOKEN}@github.com/kata-team/technology-radar.git`,
            message: 'Deploy to GitHub Pages from Travis CI.',
        },
        src: ['**'],
    },
};
