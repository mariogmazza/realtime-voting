const Pusher = require("pusher");
const mongoose = require("mongoose");

const Vote = require("../models/Vote");

const pusher = new Pusher({
  appId: "875091",
  key: "701d814639788bf71764",
  secret: "ab048d8867e1d19d58bc",
  cluster: "mt1",
  encrypted: true
});

exports.poll = (req, res, next) => {
  Vote.find().then(votes => res.json({ success: true, votes: votes }));
};

exports.pollPost = (req, res, next) => {
  const newVote = {
    os: req.body.os,
    points: 1
  };

  new Vote(newVote).save().then(vote => {
    pusher.trigger("os-poll", "os-vote", {
      points: parseInt(vote.points),
      os: vote.os
    });

    return res.json({ success: true, message: "Thank you for voting" });
  });
};
