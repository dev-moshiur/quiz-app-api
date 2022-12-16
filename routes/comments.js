


const mongoose =require('mongoose')
const express=require("express");
const router=express.Router();
const Comment =require('../models/comments')
//cREATE
router.post('/',async(req,res)=>{

    const single= new Comment(req.body);
    try {
        let saved=await single.save();
        
        res.status(200).json(saved);

    } catch (error) {
        res.status(500).json(error);
    }

})

//Update
router.put("/:id",async(req,res)=>{
    try {
        const updateComment=await Comment.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true})
        res.status(200).json(updateComment)
    } catch (error) {
        
        
    }
})
//Get Some
router.get('/',async(req,res)=>{
    try {
        const result=await Comment.find({...req.query});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get All
router.get('/',async(req,res)=>{
    try {
        const result=await Comment.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error)
    }
})
//Get one
router.get('/:id',async(req,res)=>{
    try {
        const result= await Comment.findById(req.params.id);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
})
//delete
router.delete('/:id',async (req,res)=>{
    try {
        await Comment.findByIdAndDelete(
        req.params.id )
        res.status(200).json('Comment Has Been Deleted')
        
    } catch (error) {
        res.status(500).json(error)
    }
})