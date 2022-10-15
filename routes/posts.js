const { json } = require('body-parser');
const express = require('express');

const router = express.Router();
const Post = require('../models/Post') //import model

//get all post
router.get('/',async(req,res)=>{
    // res.send("We are on posts");
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
}); //using routes as posts/<route>


//get specific post
router.get('/:postID', async (req,res)=>{
    console.log(req.params.postID)
    try{
        const post = await Post.findById(req.params.postID);
        res.json(post);
    }
    catch(err){
        res.json({message:err})
    }

})


// router.post('/',(req,res)=>{
//     console.log(req.body); //data comes in
    
//     //new Post db object created
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     //post.save() is a promise so we use then and catch
//     post.save().then(data=>{
//         res.json(data);
//     })
//     .catch(err => {
//         res.json({message:err})
//     })
// })

router.post('/',async(req,res)=>{
    console.log(req.body);
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }
    catch(err){
        res.json({message:err});
    }
});


//delete a specific post
router.delete('/:postID',async(req,res)=>{
    try{
        const removedPost = await Post.remove({_id:req.params.postID});
        res.json({removedPost})
    }catch(err){
        res.json({message:err})
    }
})

//update a post

router.patch('/:postID',async(req,res)=>{
    try{
        const updatePost = await Post.updateOne(
            {
                _id:req.params.postID
            },
            {
                $set : {title : req.body.title,
                        description: req.body.description
                        }
            }
        );
        res.json(updatePost);
    }
    catch(err){
        res.json({message:err});
    }
})

module.exports = router;