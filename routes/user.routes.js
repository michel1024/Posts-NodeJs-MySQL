"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const user_controller_1 = require("../controllers/user.controller");
router.route("/")
    .get(user_controller_1.getUsers);
router.route('/:action')
    .get(user_controller_1.viewCreateUser);
router.route('/create')
    .post(user_controller_1.createUser);
router.route('/edit/:id')
    .get(user_controller_1.viewEditUser);
router.route('/update')
    .post(user_controller_1.updateUser);
router.route('/delete/:id')
    .get(user_controller_1.deleteUser);
exports.default = router;
