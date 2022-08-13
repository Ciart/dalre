const { merge } = require('webpack-merge');

module.exports = (config, context) => {
  return merge(config, {
    experiments: { asyncWebAssembly: true },
  });
};
