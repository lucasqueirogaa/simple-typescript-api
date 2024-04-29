const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.cgwrkyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  env: process.env.ENVIROMENT,
};
