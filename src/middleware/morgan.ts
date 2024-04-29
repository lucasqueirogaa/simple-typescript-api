import morgan, { StreamOptions } from "morgan";
import config from "config";
import Logger from "../../config/logger";

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

const skip = () => {
  const isDevelopment = process.env.ENVIROMENT === "development";

  return isDevelopment;
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export default morganMiddleware;
