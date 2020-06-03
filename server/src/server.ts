import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    console.log('Listagem de usuarios')

    //JSON

    response.json([
        'Bruno',
        'Enzo',
        'Jairo',
        'Janaína'
    ])
})

app.listen(3333)