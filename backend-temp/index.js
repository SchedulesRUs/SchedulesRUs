const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ScheduleInfo', (req, res) => {
    res.send(
        [
            {
                "id": 76,
                "userId": 5,
                "title": "Khit",
                "allDay": false,
                "color": "#ff5733",
                "start": "2024-02-09T15:00:00.000Z",
                "end": "2024-02-09T24:00:00.000Z"
            },
            {
                "id": 77,
                "userId": 5,
                "title": "Don",
                "allDay": false,
                "color": "#ff5733",
                "start": "2024-02-09T15:00:00.000Z",
                "end": "2024-02-09T24:00:00.000Z"
            }
        ]
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})