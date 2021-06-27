import { useFormik } from 'formik';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form } from 'semantic-ui-react';
import * as Yup from 'yup';
import { createAddressApi } from '../../../api/address';
import { useAuth } from '../../../hooks/useAuth';

export interface AddressProps {
  title: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
}

interface AdressFormProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setReloadAddresses: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddressForm = ({ setShowModal, setReloadAddresses }: AdressFormProps) => {
  const [loading, setLoading] = useState(false);
  const { auth, logout } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData: AddressProps) => {
      createAddress(formData);
    },
  });

  const createAddress = async (formData: AddressProps) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
      users_permissions_user: auth!.idUser,
    };
    const response = await createAddressApi(formDataTemp, logout, auth!.idUser);
    if (!response) {
      toast.warning('Error when creating the address');
      setLoading(false);
    } else {
      formik.resetForm();
      setReloadAddresses(true);
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="title"
        type="text"
        label="Address Title"
        placeholder="Address Title"
        value={formik.values.title}
        error={formik.errors.title}
        onChange={formik.handleChange}
      />
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          type="text"
          label="Name and Lastname"
          placeholder="Name and Lastname"
          value={formik.values.name}
          error={formik.errors.name}
          onChange={formik.handleChange}
        />
        <Form.Input
          name="address"
          type="text"
          label="Address"
          placeholder="Address"
          value={formik.values.address}
          error={formik.errors.address}
          onChange={formik.handleChange}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="city"
          type="text"
          label="City"
          placeholder="City"
          value={formik.values.city}
          error={formik.errors.city}
          onChange={formik.handleChange}
        />
        <Form.Input
          name="state"
          type="text"
          label="State / Province / Region"
          placeholder="State / Province / Region"
          value={formik.values.state}
          error={formik.errors.state}
          onChange={formik.handleChange}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="postalCode"
          type="text"
          label="Postal Code"
          placeholder="Postal Code"
          value={formik.values.postalCode}
          error={formik.errors.postalCode}
          onChange={formik.handleChange}
        />
        <Form.Input
          name="phone"
          type="text"
          label="Phone number"
          placeholder="Phone number"
          value={formik.values.phone}
          error={formik.errors.phone}
          onChange={formik.handleChange}
        />
      </Form.Group>
      <div className="actions">
        <Button type="submit" className="submit" loading={loading}>
          Add Address
        </Button>
      </div>
    </Form>
  );
};

const initialValues = () => {
  return {
    title: '',
    name: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
  };
};

const validationSchema = () => {
  return {
    title: Yup.string().required(true),
    name: Yup.string().required(true),
    address: Yup.string().required(true),
    city: Yup.string().required(true),
    state: Yup.string().required(true),
    postalCode: Yup.string().required(true),
    phone: Yup.string().required(true),
  };
};

export default AddressForm;
