import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/customers');
                setCustomers(response.data);
            } catch (error) {
                alert('Error fetching customers');
            }
        };
        fetchCustomers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/customers/${id}`);
            setCustomers(customers.filter(customer => customer._id !== id));
        } catch (error) {
            alert('Error deleting customer');
        }
    };

    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer._id}>
                        {customer.name} - {customer.email}
                        <button onClick={() => handleDelete(customer._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
