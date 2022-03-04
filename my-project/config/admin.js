module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2117cfa2d1bdf5a9736d28bc2e38146b'),
  },
});
