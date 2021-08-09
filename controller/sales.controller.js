const db=require('../models');
const Sales = db.sales;
// const Op = db.sales.Op;

module.exports={
    create:function(req,res){
        console.log("body content",req.body)
         let { title,description,amount}=req.body;
         let sales={
             title:title,
             description:description,
             amount:amount
         }
         Sales.create(sales).then(data=>{
             res.send(data);
         }).catch(err=>{
             res.status(500).send({
                 message:err.message||"db error"
             });
         });
    },
    findAll:function(req,res){
      const{ title}=req.query;
      Sales.findAll().then(data=>{
          res.send(data)
      }).catch(err=>{
          res.status(500).send({message:err.message||"fetch error"})
      })
    },
    findOne:function(req,res){
        let {id}=req.query;
         Sales.findByPk(id).then(data=>{
             res.send(data);
         }).catch(err=>{
             res.status(500).send({message:"retrive error"});
         })
    },
    update:function(req,res){
        let {id}=req.body;
        Sales.update(req.body,{where:{id:id}})
        .then(data=>{
            if(data==1){
                res.send({message:"sales order updated successfully"})
            }else{
                res.send({message:"error occurred during sales order updation"});
            }
        }).catch(err=>{
            res.status(500).send({
                message:"Updation error"
            })
        })
    },
    delete:function(req,res){
        console.log("req.", req.query)
        const id=req.query.id;
        console.log("query value",id)
        Sales.destroy({where:{id:id}})
        .then(data=>{
            if(data==1){
                res.send({message:"Sales order deleted successfully."})
            }else{
                res.send({message:"Sales order id not found."})
            }
        }).catch(err=>{
            console.log("error in deletion",err);
            res.send({message:"Error in delete the data."})
        })
    },
    deleteall:function(req,res){
        Sales.destroy({where:{},truncate:false})
        .then(nums=>{
            res.send({message:"All records deleted"})
        }).catch(err=>P
        )
    },
}