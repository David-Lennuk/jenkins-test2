const express = require('express');
const app = express();
const port = 3000;

function favorit(film) {
return 'My favorit food  ' + food + "!";
}
app.get('/', (req, res) => {
res.json({"text": film("icecream")});
});

if (require.main === module) {
app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`);
});
}
module.exports = { app, favorit };
