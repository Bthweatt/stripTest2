const express = require('express');
const stripe = require('stripe')('sk_test_51O2yBkGWcIk0Ah5OHbTJF3yhSPZPTVH3OFH7PqikXLo6zIAUBFPUJVtroq6XbQcarj1a9Pu0dskT7iKbbkiTOPne00oGIqGAeG'); // Replace with your actual Stripe secret key
const cors = require('cors');
const createPaymentIntent = require('./createPaymentIntent'); // Import the createPaymentIntent function

const app = express();
app.use(express.json());
app.use(cors());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Define the route for creating a payment intent
app.use('/create-payment-intent', createPaymentIntent);

const PORT = process.env.PORT || 3000; // Use Heroku's port or a default port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
