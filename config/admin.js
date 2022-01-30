module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fb75bd3bd07241c78e6179ef396216ce'),
  },
});
