const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const database = require('./database');

const app = express();

// Middleware
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const employeeRoutes = require('./src/routes/employeeRoutes');
const assetRoutes = require('./src/routes/assetRoutes');
const assetCategoryRoutes = require('./src/routes/assetCategoryRoutes');
const stockViewRoutes = require('./src/routes/stockViewRoutes');

app.use('/employees', employeeRoutes);
app.use('/assets', assetRoutes);
app.use('/categories', assetCategoryRoutes);
app.use('/stock', stockViewRoutes);

// Start server
const PORT = process.env.PORT || 4080;
app.listen(PORT, () => {
  console.log(`Server running on port 4080`);
});
