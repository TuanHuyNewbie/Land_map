require('dotenv').config();
const hash = require('../models/history');
const item = require('../models/item');
const user = require('../models/user');


class Hash{

    index(req, res, next){
        const ltxhash =  req.body.txhash
        //const laddress = req.body.address
        const lowner = req.body.owner
        const lname = req.body.name
        const ldescription = req.body.description
        const ltokenid = req.body.tokenid
        const limage = req.body.image
        //res.json(req.body)
        const data = new hash({ 
            txhash: ltxhash
        })
        const lid = data._id
        
        const data2 = new item({
            owner: lowner,
            name: lname,
            description: ldescription,
            tokenid: ltokenid,
            image: limage,
            _id: lid
        })
        const laddress = data2.owner
        const data1 = new user({
            address: laddress,
            _id: lid
        })
        try {
            /*const dataToSave =*/ data.save();
            /*const dataToSave1 =*/ data1.save();
            /*const dataToSave2 =*/ data2.save();
            //res.status(200).json(dataToSave)
            res.send('Da luu vao database');
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    get(req, res, next){
        const ltxhash =  req.query.txhash
        hash.findOne({txhash: ltxhash }, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                const lid = docs._id
                item.findOne({_id: docs._id}, function(err, docs1){
                    if(err){
                        console.log(err)
                    }
                    else{
                        res.json(docs1);
                    }
                });
            }
        });
    }

    async test1(req,res, next){

        const a = await user.find({_id: '6347c75e90a07729578a0da8'})
        res.json(a)
        
    }
    test(req,res, next){

        res.send('Thành Công Rồi')
    }

    getItemUA(req, res, next){
        const laddress = req.query.address
        user.findOne({address: laddress }, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                const lid = docs._id
                item.findOne({_id: lid}, function(err, docs1){
                    if(err){
                        console.log(err)
                    }
                    else{
                        res.json(docs1);
                    }
                });
            }
        });

    }

    getItemUT(){
        const ltokenid = req.query.tokenid
        item.findOne({tokenid: ltokenid}, function(err, docs){
            if(err){
                console.log(err)
            }
            else{
                res.json(docs);
            }
        });


    }

    



}

module.exports = new Hash;