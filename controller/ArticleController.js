import Articles from "../models/ArticleModel";

export const getAllArticles = async (req, res) => {
  try {
    const query = await Articles.find();
    return res.status(200).json({
      susses: true,
      data: query,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      susses: false,
      data: null,
      message: error.message,
    });
  }
};

export const createArticle = async (req, res) => {
  try {
    const doc = await Articles.create({ ...req.body });
    console.log("doc : ", doc);
    return res.status(201).json({
      success: true,
      data: doc,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      data: null,
      message: error.message,
    });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const {
      query: { id },
      body,
    } = req;
    const doc = await Articles.getByIdAndPopulate(id, body);
    if (!doc) {
      throw new Error(`No article of id ${id} found`);
    }
    await doc.save();
    return res.status(201).json({
      success: true,
      data: doc,
    });
  } catch (error) {
    console.log(" error form catch ", error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const getArticle = async (req, res) => {
  try {
    const {
      query: { id },
    } = req;
    const query = await Articles.findById(id);
    return res.status(200).json({
      success: true,
      data: query,
    });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
};
