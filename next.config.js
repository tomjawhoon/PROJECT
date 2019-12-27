const withSass = require("@zeit/next-css");
const webpack = require('webpack');
module.exports = withSass({
    webpack: config => {
        config.node = {
            fs: 'empty'
        }    
        return config
    }
})

module.exports = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        return config
    }
}