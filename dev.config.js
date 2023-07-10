module.exports = {
  apps: [
    {
      script: "server.js",
      watch: ["server.js"],
      ignore_watch: ["node_modules"],
    },
  ],
};
