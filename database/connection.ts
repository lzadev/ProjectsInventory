import mongoose from "mongoose";

const connect = async (urlServer: string): Promise<typeof mongoose> => {
  return mongoose.connect(urlServer);
};

export default connect;
