const router = require("express").Router();
const { Post } = require("../../models");
const auth = require("../../utils/auth");

router.post("/", auth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      post_content: req.body.post_content,
      post_created_date: req.body.post_created_date,
      author_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const updatePost = await Post.update(req.body, {
      where: {
        id: req.params.id,
        author_id: req.session.user_id,
      },
    });
    if (!updatePost) {
      res.status(404).json({ message: "Post with this ID is not found to update" });
      return;
    }
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id",auth, async (req, res) => {
    try {
      const deletePost = await Post.destroy({
        where: {
          id: req.params.id,
          author_id: req.session.user_id,
        },
      });
      if (!deletePost) {
        res
          .status(404)
          .json({ message: "Post with this ID is not found to delete!" });
        return;
      }
      res.status(200).json(deletePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  