import mongoose from 'mongoose';

export default class MongoConfig {
  constructor() {}

  public async connect(): Promise<void> {
    console.log('[MONGO] Conecting to MongoDB...');

    var mongoAdress =
      'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME;
    mongoose
      .connect(mongoAdress, {
        useCreateIndex: true,
        useNewUrlParser: true,
      })
      .then(() => console.log('[MONGO] Conected to MongoDB'))
      .catch((err) => console.error(err));
  }
}
