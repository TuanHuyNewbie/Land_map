import {Request, Response, NextFunction} from 'express'
import { Schema, model } from 'mongoose';
const owned = require("../models/owned");
//import { Response } from 'express'
const infoland = require('../models/infoland')
const users = require('../models/user')



class Land{
    add(req: Request, res: Response, next: NextFunction){
        //for(let i=93416620032; i<=93416620052; i++){
            //const dir = i + '.json'
            //const file = require('../../../data/' + dir)
            const owner = '0x44e7c01a595e0fe3e21e0f18fdd35e1cc416c13a'
            const lname = req.body.name
            const ldescription = req.body.description
            const limage = req.body.image
            const lx = req.body.x
            const ly = req.body.y
            const lworld = req.body.world
            const user = new users({
                address: owner
            })
            const land = new infoland({
                name: lname,
                description: ldescription,
                image: limage,
                x: lx,
                y: ly,
                world: lworld,
                _id: user._id
            })
            try{
                user.save()
                land.save()
                res.send('Success')
            } catch(e){
                res.status(400).json({ message: (e as Error).message });
            }
        //}
        

    }
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
            const worldId = req.body.world_id;
            const _x = req.body.x;
            const _y = req.body.y;
          
            let land = await infoland.findOne({x: _x, y: _y, world: worldId}).exec();
            let landid = land._id;
        
            let findOwned = await owned.findOne({land_id: landid}).exec();
            //console.log(findOwned);
            let userid = findOwned?.user_id
            //console.log(userid)
            let user = await users.findOne({_id: userid}).exec();
            let data_res = {
              owner_address: user.address,
              x: _x,
              y: _y,
        
            }
            //res.render("", data_res);
            console.log(data_res);
    }

    async delete(req: Request, res: Response, next: NextFunction){
            let usersArr = await users.find().exec();
            let num = usersArr.length;
            for(let i = 1; i< num; i++){
                users.deleteOne({_id: usersArr[i]._id}).exec();
            }
    }        
    
    




}
module.exports = new Land();