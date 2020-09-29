const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Post = require('../../models/Post');
const { check, validationResult } = require('express-validator');
//@route  GET api/posts
//@desc  get all posts    //description
//@access  public

router.get('/', async (req, res) => {
  console.log(req.body);
  try {
    const posts = await Post.find().populate('user', ['name', 'avatar']);
    res.json(posts);
  } catch (error) {
    console.error(error.meddage);
    res.status(500).send('Server Error');
  }
});

//@route    DELETE api/posts
//@desc  delete single Post    //description
//@access  Private

router.delete('/post/:postId', auth, async (req, res) => {
  try {
    await Post.deleteOne({
      _id: req.params.postId,
    });
    res.json({ msg: 'Deleted Post successfully' });
  } catch (error) {
    res.json({ msg: 'Deletion failed' });
  }
});

//@route        Update api/posts
//@desc  update single Post    //description
//@access  Private

router.put('/post/:postId', auth, async (req, res) => {
  try {
    await Post.findOneAndUpdate(
      {
        _id: req.params.postId,
      },
      {
        comments: req.body.comments,
        likes: req.body.likes,
      }
    );
    res.json({ msg: 'Post updated', post: req.body });
  } catch (error) {
    console.log(error.name);
    if (error.name == 'CastError') {
      return res.status(400).json({ msg: 'the uesr id is wrong formated' });
    }
    console.error(error.meddage);
    res.status(500).send('Server Error');
  }
});

//@route  POST api/posts
//@desc  saving the post     //description
//@access  Private

router.post(
  '/',
  [
    auth,
    [
      check('content', 'Content is required').not().isEmpty(),
      check('title', 'Title is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }
    try {
      post = new Post({
        content: req.body.content,
        title: req.body.title,
        date: req.body.date,
        comments: req.body.comments,
        likes: req.body.likes,
      });

      await post.save();
      res.json({ msg: 'saved Post', post });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
