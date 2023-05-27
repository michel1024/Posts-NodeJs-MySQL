"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.editPost = exports.viewEditPost = exports.createPost = exports.viewCreatePost = exports.getPost = exports.getPosts = void 0;
const database_1 = require("../database");
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const posts = yield conn.query("SELECT * FROM posts");
        return res.render("posts", { data: posts[0], action: null });
    });
}
exports.getPosts = getPosts;
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const conn = yield (0, database_1.connect)();
        const posts = yield conn.query("SELECT * FROM posts WHERE id = ?", [id]);
        return res.json(posts[0]);
    });
}
exports.getPost = getPost;
function viewCreatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const action = req.params.action;
        const conn = yield (0, database_1.connect)();
        const posts = yield conn.query("SELECT * FROM posts");
        return res.render("posts", { data: posts[0], action });
        // res.render("formCreatePost");
    });
}
exports.viewCreatePost = viewCreatePost;
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query("INSERT INTO posts SET ?", [newPost]);
        return res.redirect("/posts");
    });
}
exports.createPost = createPost;
function viewEditPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        // const action = req.params.action;
        const conn = yield (0, database_1.connect)();
        const result = yield conn.query("SELECT * FROM posts WHERE id = ?", [id]);
        res.render("posts", { data: result[0], action: "edit" });
    });
}
exports.viewEditPost = viewEditPost;
function editPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.body.id;
        const title = req.body.title;
        const description = req.body.description;
        const image_url = req.body.image_url;
        const updatePost = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query("UPDATE posts SET ? WHERE id = ?", [updatePost, id]);
        return res.redirect("/posts");
    });
}
exports.editPost = editPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const conn = yield (0, database_1.connect)();
        yield conn.query("DELETE FROM posts WHERE id = ?", [id]);
        return res.redirect("/posts");
    });
}
exports.deletePost = deletePost;
