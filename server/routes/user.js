import express from "express"

const router = express.Router();

router.get("/user", (req, res) => {
  res.json({
    data: "hey you hit create-or-update-user API endpoint",
  });
});

export default  router;
