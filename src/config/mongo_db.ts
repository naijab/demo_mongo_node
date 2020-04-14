import { ConnectionOptions, connect } from "mongoose";

const ConnectMongoDB = async () => {
  try {
    const mongoURI: string = "mongodb+srv://seniorobd2:seniorobd2@seniorproject-f0o8e.mongodb.net/test?retryWrites=true&w=majority";
    const options: ConnectionOptions = {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };
    await connect(
      mongoURI,
      options
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(`MongDB Connection Error : ${err.message}`);
    // Exit process with failure
    process.exit(1);
  }
};

export default ConnectMongoDB;