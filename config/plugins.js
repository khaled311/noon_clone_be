module.exports = {
    "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_M6pkumaP7nSlP2JWU1vilcK0X4AR/a6q7Zk6CKq",
      apiToken: "rKBzXcqK1YkuSxvETpxJjor7",
      appFilter: "noon-clone-be",
      teamFilter: "team_mJnWqLwqXPWcYuGZxLqmc9Uo",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
};
