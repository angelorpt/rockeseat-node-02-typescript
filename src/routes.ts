import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export const createCourse = (req: Request, res: Response) => {
  CreateCourseService.execute("Nodejs", 10, "Dani");
  return res.send();
};
