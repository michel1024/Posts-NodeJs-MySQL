"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const post_controller_1 = require("../controllers/post.controller");
router.route("/")
    .get(post_controller_1.getPosts);
router.route("/:action")
    .get(post_controller_1.viewCreatePost);
router.route("/create")
    // .get(viewCreatePost)
    .post(post_controller_1.createPost);
router.route("/edit/:id")
    .get(post_controller_1.viewEditPost);
router.route("/update")
    .post(post_controller_1.editPost);
router.route("/delete/:id")
    .get(post_controller_1.deletePost);
exports.default = router;
