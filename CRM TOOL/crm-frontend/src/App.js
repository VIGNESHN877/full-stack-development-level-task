import React from 'react';
import CustomerForm from './Components/CustomerForm';
import CustomerList from './Components/CustomerList';

const App = () => {
    return (
        <div>
            <h1>CRM Tool</h1>
            <CustomerForm />
            <CustomerList />
        </div>
    );
};

export default App;
