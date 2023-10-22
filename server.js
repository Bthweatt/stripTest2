const express = require('express');
const stripe = require('stripe')('sk_test_51O2yBkGWcIk0Ah5OHbTJF3yhSPZPTVH3OFH7PqikXLo6zIAUBFPUJVtroq6XbQcarj1a9Pu0dskT7iKbbkiTOPne00oGIqGAeG'); // Replace with your actual Stripe secret key
const createPaymentIntent = require('./createPaymentIntent'); // Import the createPaymentIntent function

const app = express();
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Define the route for creating a payment intent
app.use('/create-payment-intent', createPaymentIntent);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});