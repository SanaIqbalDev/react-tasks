import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  console.log("I am called");
  try {
    let collection = await db.collection("tasklist");
    let results = await collection.find({}).toArray();
    console.log("tasklist is ", results);
    res.send(results).status(200);

  } catch (error) {
    console.log("encountered an error:", error);
  }
});

// // This section will help you get a single record by id
// router.get("/:id", async (req, res) => {
//   let collection = await db.collection("records");
//   let query = { _id: new ObjectId(req.params.id) };
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// // This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    id:req.body.id,
    name: req.body.name,
    detail: req.body.detail,
    dueDate: req.body.dueDate,
    startDate: req.body.startDate,
    completionDate: req.body.completionDate,
    category: req.body.category,
    priority: req.body.priority,
    isComplete: req.body.isComplete
  };
  let collection = await db.collection("tasklist");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// // This section will help you update a record by id.
// router.patch("/:id", async (req, res) => {
//   const query = { _id: new ObjectId(req.params.id) };
//   const updates = {
//     $set: {
//       name: req.body.name,
//       position: req.body.position,
//       level: req.body.level,
//     },
//   };

//   let collection = await db.collection("records");
//   let result = await collection.updateOne(query, updates);

//   res.send(result).status(200);
// });

// // This section will help you delete a record
// router.delete("/:id", async (req, res) => {
//   const query = { _id: new ObjectId(req.params.id) };

//   const collection = db.collection("records");
//   let result = await collection.deleteOne(query);

//   res.send(result).status(200);
// });

export default router;