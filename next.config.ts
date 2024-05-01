const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/projects": { page: "/projects" },
      "/resume": { page: "/resume" },
      "/contact": { page: "/contact" },
      "/contribute": { page: "/contribute" },
    }
  },

  assetPrefix: '',
  webpack: (config: { module: { rules: any[]; }; }, { dev }: any) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  }
}
