import { Router } from "express";

const authRoutes = Router()

authRoutes.get('/', (req, res) => {
  return res.json("Hello World")
})

export default authRoutes