module.exports = function (api) {
  api.cache(true);

  const presets = ["next/babel", "@babel/preset-typescript"];
  const plugins = [["emotion"]];

  return {
    presets,
    plugins
  };
};
