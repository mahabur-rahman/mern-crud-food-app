const express = require("express");
const router = express.Router();
const List = require("../model/foodSchema");

// create food
router.post("/insert", async (req, res) => {
  const foodName = req.body.foodName;
  const days = req.body.days;
  try {
    const food = new List({
      foodName: foodName,
      daysSinceIAte: days,
    });

    // save food on database
    await food.save();

    res.json(food);
  } catch (err) {
    console.log(err);
  }
});

// read food | get food

router.get("/read", (req, res) => {
  List.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

// update food

router.put("/update", async (req, res) => {
  const id = req.body.id;
  const newFoodName = req.body.newFoodName;
  try {
    await List.findById(id, (err, updatedFood) => {
      updatedFood.foodName = newFoodName;

      updatedFood.save();
      res.send("updated");
    });
  } catch (err) {
    console.log(err);
  }
});

// deleted food

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await List.findByIdAndDelete(id).exec();
  res.send("deleted");
});

// export
module.exports = router;
