const mongoose = require("mongoose");
const fetch = require("node-fetch");
const UserSchema = require("../model/user");
const express = require("express");
const app = express();
const moment = require("moment");
const math = require("math");
const axios = require("axios");

//
module.exports.getDataUser = async (req, res, next) => {
  try {
    let gmt = new Date().getTimezoneOffset() / 60;
    console.log(gmt);
    gmt = gmt < 0 ? " GMT+" + -1 * gmt : " GMT-" + -1 * gmt;
    let dateTime =
      new Date()
        .toLocaleString()
        .replace(",", "")
        .replace(".", "-")
        .replace(".", "-") + gmt;

    let ip = await axios.get("https://api.ipify.org?format=json");
    // console.log(ip.data.ip)

    // .then((results) => results.json())
    // .then((data) => data.ip);

    // ip, port clickDate, date.now()
    const clientData = new UserSchema({
      link: req.headers.referer || null,
      ipAddRemote: req.connection.remoteAddress,
      ipAddServer: ip.data.ip,
      ipAddHeaders: req.headers["x-forwarded-for"],
      portHeader: req.headers["x-forwarded-port"],
      portServer: req.app.settings.port || process.env.PORT,
      currentDate: dateTime,
    });

    await clientData.save();

    var url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=04051ca1b57b49289b60bd534185b63b`;

    const news_get = await axios.get(url);

    let data = {
      link: req.headers.referer || null,
      ipAddRemote: req.connection.remoteAddress,
      ipAddServer: ip.data.ip,
      ipAddHeaders: req.headers["x-forwarded-for"],
      portHeader: req.headers["x-forwarded-port"],
      portServer: req.app.settings.port || process.env.PORT,
      currentDate: dateTime,
    };

    console.log(data);

    res.render("news", { articles: news_get.data.articles });
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: e.message });
  }
};

module.exports.searchNews = async (req, res) => {
  const search = req.body.search;
  try {
    var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=04051ca1b57b49289b60bd534185b63b`;

    const news_get = await axios.get(url);
    res.render("news", { articles: news_get.data.articles });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
};
