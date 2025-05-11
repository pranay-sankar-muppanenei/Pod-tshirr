import React from 'react';
import { useForm } from 'react-hook-form';

const CustomForm = () => {
  const { register } = useForm({
    defaultValues: {
      height: '180cm',
      weight: '80kg',
      build: 'athletic',
    },
  });

  return (
    <form className="custom-form">
      <label>Height:</label>
      <input {...register('height')} placeholder="180cm" />

      <label>Weight:</label>
      <input {...register('weight')} placeholder="80kg" />

      <label>Build:</label>
      <select {...register('build')}>
        <option value="lean">Lean</option>
        <option value="reg">Regular</option>
        <option value="athletic">Athletic</option>
        <option value="big">Big</option>
      </select>
    </form>
  );
};

export default CustomForm;