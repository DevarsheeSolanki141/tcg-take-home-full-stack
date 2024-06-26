import { magiccardsServices } from "../service/magiccards.service";
import { Request, Response } from 'express';

class magiccardsController {

    getMagiccards = async (req: Request, res: Response) => {
        try {
            const response = await magiccardsServices.fetchMagicCards(req.body.search);
            
            if (response) {
                res.status(200).json(response)
            } else {
               
                
                res.status(500).json({ error: response });
            }

        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

}

//export class
export const MagiccardsController = new magiccardsController()