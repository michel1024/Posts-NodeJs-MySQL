"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
function index(req, res) {
    const title = "Welcome to my APP desde PUG";
    return res.render("index", { title: title });
}
exports.index = index;
