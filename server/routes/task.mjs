import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("tasklist");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.post("/", async (req, res) => {
  let newDocument = {
    id: req.body.id,
    name: req.body.name,
    detail: req.body.detail,
    dueDate: req.body.dueDate,
    startDate: req.body.startDate,
    completionDate: req.body.completionDate,
    category: req.body.category,
    priority: req.body.priority,
    isComplete: req.body.isComplete,
  };
  let collection = await db.collection("tasklist");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      name: req.body.name,
      detail: req.body.detail,
      dueDate: req.body.dueDate,
      category: req.body.category,
      priority: req.body.priority,
    },
  };

  let collection = await db.collection("tasklist");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

router.patch("/complete/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const updates = {
    $set: {
      isComplete: req.body.isComplete,
      completionDate: req.body.completionDate,
    },
  };

  let collection = await db.collection("tasklist");
  let result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("tasklist");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
