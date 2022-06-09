import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
        <div className='my-2 d-flex justify-content-center'>
<Form className="d-flex">
<FormControl
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
  />
  <Button variant="outline-success">Search</Button>
</Form>
</div>
        </div>
    );
};

export default Footer;