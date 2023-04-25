import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    res.send("All fields are required");
    alert("All fields are required");
  }

  const exist = await User.findOne(email);
  if (exist) {
    res.status(400);
    res.send("User alreday Registered");
    alert("User alreday Registered");
  }

  const newUser = await User.create({
    name: name,
    email: email,
    password: password,
  });

  const user = await User.findOne(email);

  if (user) {
    res.status(200);
    res.send({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  }

  res.status(400);
  res.send("Please try again, Something went wrong");
};
