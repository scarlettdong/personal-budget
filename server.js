const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

// const budget = {
//     myBudget : [
//         {
//             title :'Eat out',
//             budget: 30
//         },
//         {
//             title: 'Rent',
//             budget: 350 
//         },
//         {
//             title: 'Groceries',
//             budget: 90
//         },
//     ]
// };

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    fs.readFile('budgetdata.json', 'utf8', (err, data) => {
        if (err) {
            console.error("file read error:", err);
            res.status(500).send('Server error');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});