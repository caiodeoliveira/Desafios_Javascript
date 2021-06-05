const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

const social_medias = require("./data1_content")
const cards = require("./data2_content")
const tecs = require("./data_about")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("courses", { itens: social_medias, items: cards })
})

server.get("/about", function(req, res) {

    about = {
        title: " Rocketseat ",
        description: " Mais do que uma plataforma de educação em tecnologia, uma comunidade incrível de devs em busca do próximo nível "
    }

    return res.render("about", { about, itens: tecs })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(2000, function() {
    console.log("server rodando")
})