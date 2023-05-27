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
exports.deleteUser = exports.updateUser = exports.viewEditUser = exports.createUser = exports.viewCreateUser = exports.getUsers = void 0;
const database_1 = require("../database");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const users = yield conn.query("SELECT * FROM users");
        return res.render("user/index", { data: users[0], action: null });
    });
}
exports.getUsers = getUsers;
function viewCreateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let action = req.params.action;
        const conn = yield (0, database_1.connect)();
        const users = yield conn.query("SELECT * FROM users");
        return res.render("user/index", { data: users[0], action });
    });
}
exports.viewCreateUser = viewCreateUser;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = req.body;
        const conn = yield (0, database_1.connect)();
        const user = yield conn.query("INSERT INTO users SET ?", [newUser]);
        return res.redirect("/users");
    });
}
exports.createUser = createUser;
function viewEditUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        // const action = req.params.action;
        const conn = yield (0, database_1.connect)();
        const user = yield conn.query("SELECT * FROM users WHERE id = ?", [id]);
        return res.render("user/index", { data: user[0], action: "edit" });
    });
}
exports.viewEditUser = viewEditUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.body.id;
        const userData = req.body;
        const conn = yield (0, database_1.connect)();
        const userUpdate = yield conn.query("UPDATE users SET ? WHERE id = ?", [userData, id]);
        return res.redirect("/users");
    });
}
exports.updateUser = updateUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const conn = yield (0, database_1.connect)();
        yield conn.query("DELETE FROM users WHERE id = ?", [id]);
        return res.redirect("/users");
    });
}
exports.deleteUser = deleteUser;
