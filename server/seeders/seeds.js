const faker = require("faker");

const db = require("../config/connection");

const User = require("../models/User");
const Exercises = require("../models/Exercises");

db.once("open", async () => {
  await Exercises.deleteMany();

  
  await User.deleteMany();

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create Exercisess
  let createdExercisess = [];
  for (let i = 0; i < 100; i += 1) {
    const ExercisesText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdExercises = await Exercises.create({
      exerciseTypes: "Pushups",
      ExercisesText,
      username,
    });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { Exercisess: createdExercises._id } }
    );

    createdExercisess.push(createdExercises);
  }

  console.log("all done!");
  process.exit(0);
});
