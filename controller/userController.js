import { users } from "../utils/user";
const createUsers = async (req, res) => {
  try {
    const bodyData = req.body;
    console.log(bodyData);
    res.status(201).json({
      status: "success",
      data: {
        bodyData,
      },
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      data: null,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    if (!user) {
      throw new Error("internal server error");
    }
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      data: null,
      message: error.message,
    });
  }
};
const getUser = async (req, res) => {
  try {
    const { id } = req.query;
    const [user] = users.filter((user) => Number(id) === user.id);
    if (!user) {
      throw new Error("user not found");
    }
    res.status(200).json({
      success: true,
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      data: null,
      message: error.message,
    });
  }
};

export { getUsers, createUsers, getUser };
