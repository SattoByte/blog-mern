import PostModel from '../models/Post.js';

export const getAll = async (req, res) => { //get all posts
  try {
    const posts = await PostModel.find().populate('user').exec();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Couldn't get posts!",
    });
  }
}; //Working

export const getOne = async (req, res) => { //works
  try {
    const postId = req.params.id;

    let doc = await PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: "after",
      }
    );
    res.json(doc);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Couldn't get Post!",
    });
  }
};

export const remove = async (req, res) => { // remove post
  try {
    const postId = req.params.id;
    await PostModel.findOneAndDelete(
      {
        _id: postId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Couldn't remove post!",
          });
        }

        if (!doc) {
          console.log(err);
          return res.status(500).json({
            message: "Post undefined",
          });
        }

        res.json({
          success: true,
        })
      }
    );

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Couldn't remove post!",
    });
  }
};

export const create = async (req, res) => {// create Post
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.title,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      user: req.userId,
    });

    const post = await doc.save();

    res.json(post);

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Couldn't create post",
    });
  }
};

export const update = async (req, res) => { //Update post
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.title,
        imageUrl: req.body.imageUrl,
        tags: req.body.tags,
        user: req.userId,
      },

      res.json({
        success: true,
      })
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Couldn't update post",
    });
  }
}