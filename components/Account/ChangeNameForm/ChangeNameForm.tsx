import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { User } from '../../../interfaces/interfaces';

interface ChangeNameFormProps {
  user: User;
}

const ChangeNameForm = ({ user }: ChangeNameFormProps) => {
  return (
    <div className="change-name-form">
      <h4>Change your name and lastname</h4>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            name="name"
            placeholder="Your new name"
            value={user.name}
          />
          <Form.Input
            name="lastname"
            placeholder="Your new lastname"
            value={user.lastname}
          />
        </Form.Group>
        <Button className="submit">Update</Button>
      </Form>
    </div>
  );
};

export default ChangeNameForm;
