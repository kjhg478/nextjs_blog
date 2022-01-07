import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { Container } from '../styles/Container';

interface LoginProps {
  firstName: string;
  lastName: string;
  category: number;
}

const Login: React.FC<LoginProps> = () => {
  const { register, handleSubmit, getValues } = useForm<LoginProps>();
  const [result, setResult] = useState('');
  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    const getData = getValues();
    console.log(getData);
    setResult(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Layout pageTitle="Contact">
        <Container>
          <h1>Login </h1>

          <input {...register('firstName')} placeholder="First name" />
          <input {...register('lastName')} placeholder="Last name" />
          <select {...register('category')}>
            <option value="">Select...</option>
            <option value="A">Category A</option>
            <option value="B">Category B</option>
          </select>
          <p>{result}</p>
          <input type="submit" />
        </Container>
      </Layout>
    </form>
  );
};

export default Login;
