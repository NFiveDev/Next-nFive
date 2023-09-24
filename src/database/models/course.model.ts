import { Schema, Types } from 'mongoose';
import mongoose from 'mongoose';
import { ICourse } from './models';



const schema = new Schema<ICourse>({
  title: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  created: { type: Date, required: true},
  author: { type: Schema.Types.ObjectId, ref: 'User'  }
})


const course = mongoose.model<ICourse>('Course', schema);

export default course;

