/**
 * name - string
 * duration - number - weeks
 * educator - string
 */

interface iCourse {
  name: String;
  duration: number;
  educator: String;
}

class CreateCourseService {
  execute({ duration, educator, name }: iCourse) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
