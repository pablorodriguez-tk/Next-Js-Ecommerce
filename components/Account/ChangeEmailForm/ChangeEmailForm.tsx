import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { ConfigurationProps } from '../../../pages/account';

const ChangeEmailForm = ({
  user,
  logout,
  setReloadUser,
}: ConfigurationProps) => {
  return (
    <div className="change-email-form">
      <h4>
        Change your email <span>(Your actual email is: {user.email})</span>
      </h4>
      <Form>
        <Form.Group widths="equal">
          <Form.Input name="email" placeholder="Your new email" />
          <Form.Input name="repeatEmail" placeholder="Confirm your new email" />
        </Form.Group>
        <Button className="submit">Update</Button>
      </Form>
    </div>
  );
};

export default ChangeEmailForm;
