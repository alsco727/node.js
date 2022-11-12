"use strict"

function hello(req, res){
    res.render("home/index");
};

function login(req, res){
    res.render("home/login");
};

module.exports = {
    hello,
    login,
};