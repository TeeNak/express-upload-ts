import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import * as fs from "fs";

/**
 * POST /upload
 * Handle post and save.
 */
export let postUpload = (req: Request, res: Response) => {

    console.log(req.body);

    const path = "D:/temp/file.json";

    fs.writeFile(path, req.body, { "encoding": "utf8" }, (err: NodeJS.ErrnoException) => {
        if (err) {
            console.log(err);
            res.status(500).send({
                error: err
            });
        } else {
            console.log("written");
            res.sendStatus(200);
        }
    });

};
