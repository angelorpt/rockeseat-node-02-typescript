/**
 * name - string
 * duration - number - weeks
 * educator - string
 */

class CreateCourseService {
  execute(name: String, duration: number, educator: String) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
