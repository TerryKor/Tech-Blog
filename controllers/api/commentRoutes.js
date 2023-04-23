const router = require("express").Router();
const { Comment } = require("../../models");
const auth = require("../../utils/auth");

router.post("/", auth, async (req, res) => {
    try {
        const newComment = await Comment.create({
                post_id: req.body.post_id,
                comment: req.body.comment,
                comment_created_date: req.body.comment_created_date,
                author_id: req.session.user_id,
        });
        res.status(200).json(newComment);
    }catch (err){
        res.status(400).json(err);
    }
});

router.put("/:id", auth, async (req, res) => {
    try {
      const updateComment = await Comment.update(req.body, {
        where: {
          id: req.params.id,
          author_id: req.session.user_id,
        },
      });
      if (!updateComment) {
        res.status(404).json({ message: "Comment with this ID is not found to update" });
        return;
      }
      res.status(200).json(updateComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:id",auth, async (req, res) => {
    try {
      const deleteComment = await Comment.destroy({
        where: {
          id: req.params.id,
          author_id: req.session.user_id,
        },
      });
      if (!deleteComment) {
        res
          .status(404)
          .json({ message: "Comment with this ID is not found to delete!" });
        return;
      }
      res.status(200).json(deleteComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  