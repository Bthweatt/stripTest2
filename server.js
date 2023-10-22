const express = require('express');
const stripe = require('stripe')('sk_test_51O2yBkGWcIk0Ah5OHbTJF3yhSPZPTVH3OFH7PqikXLo6zIAUBFPUJVtroq6XbQcarj1a9Pu0dskT7iKbbkiTOPne00oGIqGAeG');

const app = express();
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
