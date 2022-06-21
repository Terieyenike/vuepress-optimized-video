const {description} = require('../../package')

module.exports = {
    title: 'Optimized video',
    description: description,
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Video',
                link: '/video/',
            },
        ],
        sidebar: {
            '/video/': [
                {
                    title: 'Video',
                    collapsable: false,
                    children: [
                        '',
                    ]
                }
            ],
        }
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@vuepress/nprogress'
    ]
}
