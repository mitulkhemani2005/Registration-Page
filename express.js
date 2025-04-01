const express = require('express');
const app = express();
app.use(express.static('./public'));
// app.get('*', (req, res) => {
//     res.status(404).send('NOT FOUND');
// });
app.listen(5000,()=>{
    console.log('The Server is started and Resume');
})