import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { Container } from '../styles/Container';

interface AboutProps {
  a: string;
  b: string;
  c: string;
}

let renderCount = 0;

const About: React.FC<AboutProps> = () => {
  const { watch, register, handleSubmit, setValue, formState } =
    useForm<AboutProps>({
      defaultValues: {
        a: '',
        b: '',
        c: '',
      },
    });

  const onSubmit = (data: AboutProps) => console.log(data);
  const [a, b] = watch(['a', 'b']);
  renderCount++;

  useEffect(() => {
    if (formState.touchedFields.a && formState.touchedFields.b && a && b) {
      setValue('c', `${a} ${b}`);
    }
  }, [setValue, a, b, formState]);

  return (
    <Layout pageTitle="About">
      <Container>
        <header>
          description="Performant, flexible and extensible forms with
          easy-to-use validation." <br />
          renderCount: {renderCount}
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('a')} placeholder="a" />
          <input {...register('b')} placeholder="b" />
          <input {...register('c')} placeholder="c" />
          <input type="submit" />

          <button
            type="button"
            onClick={() => {
              setValue('a', 'what', { shouldTouch: true });
              setValue('b', 'ever', { shouldTouch: true });
            }}
          >
            trigger value
          </button>
        </form>
      </Container>
    </Layout>
  );
};

export default About;
