import task from "../models/task.model.js";
import { errorHandler } from '../utils/error.js';

export const createTask = async(req, res, next) => {
    try {
        const taskk = await task.create(req.body);
        return res.status(201).json(taskk);
      } catch (error) {
        next(error);
      }
}