const router = require("express").Router();

const handle = require("../handlers");

router
    .route("/")
    .get(handle.poll)
    .post(handle.pollPost)

module.exports = router;
