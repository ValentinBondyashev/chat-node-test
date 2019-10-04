import { Request, Response } from "express";
import { User } from "../models/index";

export class TestController {
    public async sendMessage(req: Request, res: Response) {
        try {
            res.json('test!')
        } catch (error) {
            res.status(400).json(error)
        }
    }
}