const express = require('express');
const stripe = require('stripe')('sk_test_51O2yBkGWcIk0Ah5OHbTJF3yhSPZPTVH3OFH7PqikXLo6zIAUBFPUJVtroq6XbQcarj1a9Pu0dskT7iKbbkiTOPne00oGIqGAeG'); // Replace with your actual Stripe secret key

const router = express.Router();

router.post('/', async (req, res) => {
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

module.exports = router;
