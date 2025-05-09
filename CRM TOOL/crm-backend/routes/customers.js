const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
await axios.post('http://localhost:5000/api/customers', customer);

// Create a new customer
router.post('/', async (req, res) => {
    try {
        const newCustomer = new Customer(req.body);
        await newCustomer.save();
        res.json(newCustomer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete customer by id
router.delete('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json({ message: 'Customer deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
