import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const AddressForm = () => {
  return (
    <Form>
      <Form.Input
        name="title"
        type="text"
        label="Address Title"
        placeholder="Address Title"
      />
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          type="text"
          label="Name and Lastname"
          placeholder="Name and Lastname"
        />
        <Form.Input
          name="address"
          type="text"
          label="Address"
          placeholder="Address"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input name="city" type="text" label="City" placeholder="City" />
        <Form.Input
          name="state"
          type="text"
          label="State / Province / Region"
          placeholder="State / Province / Region"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="postalCode"
          type="text"
          label="Postal Code"
          placeholder="Postal Code"
        />
        <Form.Input
          name="phone"
          type="text"
          label="Phone number"
          placeholder="Phone number"
        />
      </Form.Group>
      <div className="actions">
        <Button type="submit" className="submit">
          Add Address
        </Button>
      </div>
    </Form>
  );
};

export default AddressForm;
