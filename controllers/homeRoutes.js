const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const auth = require("../utils/auth");
const { route, post } = require("./api/userRoutes");

router.get("/",  async (req, res) => {
   try {
    const postsData = await Post.findAll({
      order: [["post_created_date", "DESC"]],
      include: [
        {
          model: User,
          as: "author"
          //   attributes: ["username", "password"],
        },
      ],
    });

    const posts = postsData.map((post) => {
      return post.get({
        plain: true,
      });
    });
    res.render("home", {
      posts,
       logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/posts/:id", auth, async (req, res) => {
  try {
    const postsData = await Post.findByPk(req.params.id, {
      inculde: [
        {
          model: User,
          as: "author",
        },
        {
          model: Comment,
          include: [User],
          order: [["comment_created_date", "DESC"]],
        },
      ],
    });
    const post = postsData.get({
      plain: true,
    });
    const isAuthor = req.session.user_id === post.author.id;

    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
      isAuthor,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard",auth, async (req, res) => {
  try {
    const userId = req.session.user_id;
    const PostData = await Post.findAll({
      where: {
        author_id: userId,
      },
      include: [
        {
          model: User,
          as: "author",
        },
      ],
    });
    const posts = PostData.map((post) => {
     return post.get({ plain: true });
    });
    res.render(
      "dashboard"
      ,{
      posts,
      logged_in: req.session.logged_in,
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/createNewPost", auth, async (req, res) => {
  try {
    res.render("createNewPost");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/editPost/:id", auth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "author",
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: "No post is found with that ID " });
      return;
    }
    const post = postData.get({ plain: true });
    if (post.author_id !== req.session.user_id) {
      res.status(403).json({ message: "Please log in to edit this post" });
      return;
    }

    
    res.render("editPost", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/editPost/:id", auth, async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await Post.findByPk(postId);

    if (!postData) {
      res.status(404).json({ message: "No post found with that ID!" });
      return;
    }

    if (postData.author_id !== req.session.user_id) {
      res.status(403).json({ message: "Please log in to edit this post" });
      return;
    }
    await Post.update(
      {
        title,
        content,
        post_created_date: new Date(),
      },
      {
        where: {
          id: postId,
        },
      }
    );
    res.status(200).json({ message: "Review updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/post/:id/addComment", auth, async (req, res) => {
  try {
    const postsData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "author",
        },
        {
          model: Comment,
          include: [User],
          order: [["comment_created_date", "DESC"]],
        },
      ],
    });
    const post = postsData.get({
      plain: true,
    });
    const isAuthor = req.session.user_id === post.author_id;
    
    // if( isAuthor){
    //   res.redirect("/editPost")
    // }else{
    res.render("addComment", {
      ...post,
      logged_in: req.session.logged_in,
    
    });
  // }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/edit-post/:id", auth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "author",
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: "No post is found with that ID " });
      return;
    }
    const post = postData.get({ plain: true });
    if (post.author_id !== req.session.user_id) {
      res.status(403).json({ message: "Please log in to edit this post" });
      return;
    }
    res.render("edit-post", {
      post: postData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/signUp", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

module.exports = router;
