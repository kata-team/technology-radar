require('dotenv').config({ silent: true });

const ghpages = require('gh-pages');
const config = require('../package.json');
const domain = process.env.GH_TOKEN ? `${process.env.GH_TOKEN}@github.com` : 'github.com';

const branch = process.argv[2] || 'gh-pages';

ghpages.publish('build', {
    dotfiles: false,
    branch: branch,
    repo: config.repository.url.replace('github.com', domain),
    message: 'Publish website',
    //silent: true
}, function (err) {
    console.log(err);
    if (err) {
        throw new Error(err.message);
    } else {
        console.log('Published');
    }
});
