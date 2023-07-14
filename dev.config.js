module.exports = {
  apps: [
    {
      name : "telestrator",
      script: "server.js",
      watch: ["server.js"],
      ignore_watch: ["node_modules"],
    },
  ],
};
