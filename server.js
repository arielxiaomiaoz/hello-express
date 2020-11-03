// Load dependencies
const path = require('path');
const express = require('express');
const { static, response } = require('express');

// Create express app
const app = express();

// app.use is for using middleware
app.use(express.static(path.join(__dirname,'public')));

// Add more middleware
app.use(function(request,response){
  response.status(404);
  response.send('404, file not found')
});

// Set port preferrence with default
const PORT = process.env.PORT || 3000;
// Start server
app.listen(PORT, function(){
  console.log(`Listening on PORT ${PORT}`)
})