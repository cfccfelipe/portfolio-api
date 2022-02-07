module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  host: env("0.0.0.0"),
  port: env.PORT,
});
