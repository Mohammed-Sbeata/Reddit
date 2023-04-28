const app = require('./app');

app.listen(app.get('PORT'), () => {
  console.log(`The server is rin http://localhost:${app.get('PORT')}`);
});
