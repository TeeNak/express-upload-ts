import { Request, Response } from "express";

export let postUpload2 = (req: Request, res: Response) => {

    console.log(req.files);
    res.sendStatus(200);
};
