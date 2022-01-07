import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { ContactContainer, Container } from '../styles/Container';

interface ContactProps {
  name: string;
  showAge: boolean;
  age: number;
}

const Contacts: React.FC<ContactProps> = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactProps>();
  const watchShowAge = watch('showAge', false); // you can supply default value as second argument
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  const watchFields = watch(['showAge', 'name']); // you can also target specific fields by their names

  const onSubmit = (data: ContactProps) => {
    alert(JSON.stringify(data));
  };

  console.log('watchAllFields', watchAllFields);
  console.log('watchFields', watchFields);
  return (
    <Layout pageTitle="Contact">
      <ContactContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            type="text"
            {...register('name', { required: true, maxLength: 50 })}
          />
          {errors.name && (
            <p>{'The Name Field is Required and must be > 49 characters'}</p>
          )}
          <label>Show Age</label>
          <input type="checkbox" {...register('showAge')} />
          {watchShowAge && (
            <>
              <label>Age</label>
              <input type="number" {...register('age', { min: 50 })} />
              {errors.name && <p>{'The number must be greater then 49'}</p>}
            </>
          )}
          {/* based on yes selection to display Age */}
          <input type="submit" />
        </form>
        <div>
          {watchAllFields.name ? (
            <>
              <label>Watched Fields:</label>name: {watchAllFields.name}
            </>
          ) : (
            ''
          )}
        </div>
      </ContactContainer>
    </Layout>
  );
};

export default Contacts;
