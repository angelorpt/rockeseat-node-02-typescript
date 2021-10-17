import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export const createCourse = (req: Request, res: Response) => {
  const data = {
    name: "Nodejs",
    duration: 10,
    educator: "Dani",
  };
  CreateCourseService.execute(data);

  const data2 = {
    name: "Reacjs",
    // duration: 10,
    educator: "Diego",
  };
  CreateCourseService.execute(data2);
  return res.send();
};
