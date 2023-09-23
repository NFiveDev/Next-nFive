import _mongoose, { connect } from 'mongoose';

const MONGO_DB_URI = process.env.MONGO_CONNECTION_PATH;

if (!MONGO_DB_URI || MONGO_DB_URI.length === 0)
  throw new Error('No connection string specified in env');

declare global {
  var mongoose: {
    promise: ReturnType<typeof connect> | null;
    conn: typeof _mongoose | null;
  };
}

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectDB() {
  async function connectDB() {
    if (cached.conn) {
      console.log('🚀 Using cached connection');
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
      };

      cached.promise = connect(MONGO_DB_URI!, opts)
        .then((mongoose) => {
          console.log('✅ New connection established');
          return mongoose;
        })
        .catch((error) => {
          console.error('❌ Connection to database failed');
          throw error;
        });
    }

    try {
      cached.conn = await cached.promise;
    } catch (e) {
      cached.promise = null;
      throw e;
    } 

    return cached.conn;
  }
}

export default connectDB;
