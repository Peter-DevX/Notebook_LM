import express from "express";
import {
  getAllNotes,
  getNotById,
  createNote,
  updateNote,
  deleteNote,
} from "../Controllers/noteControllers.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNotById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
