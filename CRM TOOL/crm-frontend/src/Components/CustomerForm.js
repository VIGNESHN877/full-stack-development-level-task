import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const customer = { name, email, phone, address };
        try {
            await axios.post('http://localhost:5000/api/customers', customer);
            alert('Customer added successfully!');
        } catch (error) {
            alert('Error adding customer');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <textarea placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <button type="submit">Add Customer</button>
        </form>
    );
};

export default CustomerForm;
