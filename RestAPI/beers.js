const express = require ('express')
const bp = require('body-parser')
const app = express()

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


let nextId = 2
const beerOne = {
    id: 1,
    name: 'Grøn Tuborg',
    brand: 'Tuborg',
    date: '07/07-2003'
}

let beers = [beerOne]


// Find all beers
app.get('/beers', (req, res) =>{
    const arrayJSON = JSON.stringify(beers)
    res.status(200).send('All beers: ' + arrayJSON)
})

// Find beer by id
app.get('/beers/:id', (req, res) =>{
    const id = req.params.id
    console.log(id)
    const beer = beers.find(b => b.id == id)
    const beerJSON = JSON.stringify(beer)

    res.status(200).send('Beer found by id: ' + beerJSON)
})

// Create new beer
app.post('/beers', (req, res) => {
    console.log(req.body)
    const beer = req.body
    beer.id = nextId
    nextId ++
    beers.push(beer)
    const beerJSON = JSON.stringify(beer)
    res.status(201).send('Created new beer: ' + beerJSON)
})

//Updates all properties of one beer by id
app.put('/beers/:id', (req, res) => {
    const id = req.params.id
    const index = beers.findIndex(b => b.id == id)
    const beer = req.body
    beer.id = id
    beers[index] = beer
    const beerJSON = JSON.stringify(beer)
    res.status(200).send('Updated beer: ' + beerJSON)
})

//Updates some prperties of one beer by id
app.patch('/beers/:id', (req, res) =>{
    const id = req.params.id
    const index = beers.findIndex(b => b.id == id)
    const beer = req.body
    beer.id = id
    
    for(const p in beer){
        beers[index] [p] = beer[p]
    }

    const beerJSON = JSON.stringify(beers[index])
    res.status(200).send('Updated one or more properties: ' + beerJSON)
})

// Delete beer by id
app.delete('/beers/:id', (req, res) =>{
    const id = req.params.id
    const beer = beers.find(b => b.id == id)
    const beerJSON = JSON.stringify(beer)
    beers = beers.filter(b => b.id != id)
    res.status(200).send('Deleted beer:' + beerJSON)

})

app.listen(8888)

