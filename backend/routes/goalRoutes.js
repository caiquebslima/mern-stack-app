const express = require("express");
const route = express.Router();
const {
    getGoals,
    updateGoal,
    deleteGoal,
    setGoals,
} = require("../controllers/goalController");

route.get("/", getGoals);
route.post("/", setGoals);
route.put("/:id", updateGoal);
route.delete("/:id", deleteGoal);

module.exports = route;
