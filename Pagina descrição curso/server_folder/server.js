const { request, response } = require('express')
const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

const social_medias = require("./datacontent")
const tecs = require("./datas/data_about")
const courses = require("./datacards")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})


server.get("/courses", function(req, res) {
    return res.render("courses", { courses })
})

server.get("/course/:id", function(req, res) {
    const id = req.params.id

    const course = courses.find(function(course) {
        if (course.id == id) {
            return true
        }
    })

    if (!course) {
        return res.send("Course not found")
    }


    return res.render("course", { course })
})

server.get("/", function(req, res) {

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
    console.log("server rodando pae")
})