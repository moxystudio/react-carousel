module.exports = {
    exportPathMap() {
        return {
            '/': { page: '/' },
        };
    },
    assetPrefix: process.env.GITHUB_ACTIONS ? '/react-carousel/' : '',
    webpack: (config) => {
        config.resolve.symlinks = false;

        return config;
    },
};
