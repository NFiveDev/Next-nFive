import connectDB from '@/database/connect';
import { CourseModel } from '@/database/models';
import type { ICourse } from '@/database/models/models';

export default function CourseService() {

  async function courseExist(id: string) {
    try {
      await connectDB();
      const response = await CourseModel.findById(id).exec();

      if(response){
        return response._id.toString().length > 0
      }

      return false;

    } catch(error) {
      throw new Error(`findById failed: ${error}`)
    }
    

  }

  async function createCourse({ title, description, author }: ICourse) {
    try {
      await connectDB();

      const course = new CourseModel({
        title: title,
        description: description,
        author: author,
        created: Date.now(),
      });

      await course.save();

    } catch (error) {
      throw new Error(`createCourse failed: ${error}`);
    }
  }

  async function deleteCourse(id: string) {
    CourseModel.findByIdAndDelete(id)
  }

  async function findCourse(course: Partial<ICourse>) {
    await connectDB();
    return await CourseModel.findOne(course).exec();
  }

  async function findAllCourses() {
    try {
      await connectDB();
      return await CourseModel.find({}).exec();
    } catch (error) {
      throw new Error(`findAllCourses failed: ${error}`);
    }
    
  }

  return {
    Exist: courseExist,
    Create: createCourse,
    Delete: deleteCourse,
    Get: findCourse,
    GetAll: findAllCourses,
  };
}
