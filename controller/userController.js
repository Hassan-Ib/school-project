import { users } from "../utils/user";
// console.log("main man");
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
    res.status(404).json({});
  }
};

const getUsers = async (req, res) => {
  const method = req.method;
  console.log(method);
  console.log("userData", user);

  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
};
const getUser = async (req, res) => {
  try {
    const { id } = req.query;
    const [user] = users.filter((user) => Number(id) === user.id);
    console.log(id, user);
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
