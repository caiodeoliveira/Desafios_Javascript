const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const data = require('./data')


server.set("view engine", "njk")

server.use(express.static('style'))
server.use(express.static('imgs'))
server.use(express.static('script'))

nunjucks.configure("views", {
    express: server,
    noCache: true,
    autoescape: false
})

server.get("/", function(req, res) {

    return res.render('index', { itens: data.recipes, index_item: data.index_texts })
})

server.get("/about", function(req, res) {

    return res.render('about', { item: data.about, footer_about: data.index_texts })
})

server.get("/recipes", function(req, res) {
    return res.render('recipes', { itens: data.recipes, item: data.index_cards, footer_recipes: data.index_texts })
})

server.get("/recipes/:index", function(req, res) {
    const recipes = data.recipes
    const recipeIndex = req.params.index
    return res.render("recipe", { item: recipes[recipeIndex], footer_recipe: data.index_texts })
})

server.listen(9000, function() {
    console.log('Tá funcionando tio')
})