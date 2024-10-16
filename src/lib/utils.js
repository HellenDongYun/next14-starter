import mongoose from "mongoose";

const connection = {};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("using existing connection");
      return;
    }
    console.log("connectin strinng printing", process.env.MONGO);
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
// we are using development mode, whenever we refresh our application, its gpinng to create a new connection to prevent
