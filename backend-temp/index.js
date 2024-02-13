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
                "title": "Khit - Day",
                "allDay": false,
                "color": "#ff5733",
                "start": "2024-02-09T07:00:00.000Z",
                "end": "2024-02-09T09:00:00.000Z"
            },
            {
                "id": 77,
                "userId": 5,
                "title": "Don - Noon",
                "allDay": false,
                "color": "#ff5733",
                "start": "2024-02-09T12:00:00.000Z",
                "end": "2024-02-09T14:00:00.000Z"
            },
            {
                "id": 78,
                "userId": 6,
                "title": "Khit - Night",
                "allDay": false,
                "color": "#00aaff",
                "start": "2024-02-10T19:00:00.000Z",
                "end": "2024-02-10T21:00:00.000Z"
            },
            {
                "id": 79,
                "userId": 7,
                "title": "Alex - Day",
                "allDay": false,
                "color": "#ffaa00",
                "start": "2024-02-11T08:00:00.000Z",
                "end": "2024-02-11T10:00:00.000Z"
            },
            {
                "id": 80,
                "userId": 8,
                "title": "Khit - Noon",
                "allDay": false,
                "color": "#33cc33",
                "start": "2024-02-12T13:00:00.000Z",
                "end": "2024-02-12T15:00:00.000Z"
            },
            {
                "id": 81,
                "userId": 9,
                "title": "John - Night",
                "allDay": false,
                "color": "#cc33cc",
                "start": "2024-02-13T20:00:00.000Z",
                "end": "2024-02-13T22:00:00.000Z"
            },
            {
                "id": 82,
                "userId": 10,
                "title": "Sara - Day",
                "allDay": false,
                "color": "#3333cc",
                "start": "2024-02-14T07:00:00.000Z",
                "end": "2024-02-14T09:00:00.000Z"
            },
            {
                "id": 83,
                "userId": 11,
                "title": "Liam - Noon",
                "allDay": false,
                "color": "#cc3333",
                "start": "2024-02-15T12:00:00.000Z",
                "end": "2024-02-15T14:00:00.000Z"
            },
            {
                "id": 84,
                "userId": 12,
                "title": "Khit - Night",
                "allDay": false,
                "color": "#cccc33",
                "start": "2024-02-16T18:00:00.000Z",
                "end": "2024-02-16T20:00:00.000Z"
            },
            {
                "id": 85,
                "userId": 13,
                "title": "Olivia - Day",
                "allDay": false,
                "color": "#33cccc",
                "start": "2024-02-17T09:00:00.000Z",
                "end": "2024-02-17T11:00:00.000Z"
            }
        ]
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})