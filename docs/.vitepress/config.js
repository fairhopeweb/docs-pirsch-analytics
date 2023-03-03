export default {
    lang: "en-US",
    title: "Pirsch Documentation",
    description: "Pirsch is a simple, privacy-friendly, and open-source web analytics solution — lightweight, cookie-free and easily integrated into any website or backend.",
    cleanUrls: true,
    head: [
        ["meta", {name: "msapplication-TileColor", content: "#ffffff"}],
        ["meta", {name: "theme-color", content: "#000000"}],
        ["meta", {name: "twitter:card", content: "product"}],
        ["meta", {name: "twitter:site", content: "@PirschAnalytics"}],
        ["meta", {name: "twitter:title", content: "Pirsch Analytics Documentation"}],
        ["meta", {name: "twitter:description", content: "Pirsch is a simple, privacy-friendly, and open-source web analytics solution."}],
        ["meta", {name: "twitter:image", content: "https://docs.pirsch.io/twitter-card.png"}],
        ["meta", {name: "og:url", content: "https://docs.pirsch.io"}],
        ["meta", {name: "og:title", content: "Pirsch Analytics Documentation"}],
        ["meta", {name: "og:description", content: "Pirsch is a simple, privacy-friendly, and open-source web analytics solution."}],
        ["meta", {name: "og:image", content: "https://docs.pirsch.io/twitter-card.png"}],
        ["meta", {name: "og:type", content: "article"}],
        ["link", {rel: "shortcut icon", type: "image/png", href: "/favicon.png"}],
        ["script", {defer: true, type: "text/javascript", src: "https://api.pirsch.io/pirsch.js", id: "pirschjs", "data-code": "6V8bSjEHJ19PK2hVxaaqJhItHUpSUekW"}]
    ],
    themeConfig: {
        logo: "/logo.png",
        algolia: {
            appId: "VAP7DI3OBV",
            apiKey: "20b32dacd2f4e3522a9c0848b54055ea",
            indexName: "pirsch"
        },
        nav: [
            {text: "Website", link: "https://pirsch.io"},
            {text: "GitHub", link: "https://github.com/pirsch-analytics/docs"}
        ],
        sidebar: [
            {
                text: "Getting Started",
                items: [
                    {text: "Website Integration", link: "/get-started/frontend-integration"},
                    {text: "Server-side Integration", link: "/get-started/backend-integration"},
                    {text: "Proxying the Scripts", link: "/get-started/proxy"},
                    {text: "Google Analytics Import", link: "/get-started/ga-import"}
                ]
            },
            {
                text: "Advanced",
                items: [
                    {text: "Access Management", link: "/advanced/access"},
                    {text: "Referrer and UTM Parameters", link: "/advanced/referrer-utm"},
                    {text: "Events", link: "/advanced/events"},
                    {text: "Conversion Goals", link: "/advanced/conversion-goals"},
                    {text: "Embedding the Dashboard", link: "/advanced/embedding"},
                    {text: "Additional Domains and Rollup Views", link: "/advanced/domains-rollup"},
                    {text: "Extending Sessions", link: "/advanced/sessions"}
                ]
            },
            {
                text: "Integrations",
                items: [
                    {text: "Google Search Console", link: "/integrations/search-console"},
                    {text: "Google Tag Manager", link: "/integrations/tag-manager"},
                    {text: "WordPress", link: "/integrations/wordpress"},
                    {text: "Laravel", link: "/integrations/laravel"},
                    {text: "Caddy", link: "/integrations/caddy"},
                    {text: "Gatsby", link: "/integrations/gatsby"},
                    {text: "Webflow", link: "/integrations/webflow"},
                    {text: "Docusaurus", link: "/integrations/docusaurus"}
                ]
            },
            {
                text: "API and SDKs",
                items: [
                    {text: "API", link: "/api-sdks/api"},
                    {text: "SDKs", link: "/api-sdks/sdks"}
                ]
            },
            {
                items: [
                    {text: "Affiliate Program", link: "/affiliate"},
                    {text: "Billing", link: "/billing"},
                    {text: "Privacy", link: "/privacy"},
                    {text: "Changelog", link: "/changelog"}
                ]
            },
            {
                items: [
                    {text: "Terms and Conditions", link: "https://pirsch.io/terms"},
                    {text: "Privacy Policy", link: "https://pirsch.io/privacy"},
                    {text: "Legal Notice", link: "https://pirsch.io/legal"}
                ]
            }
        ]
    }
}
