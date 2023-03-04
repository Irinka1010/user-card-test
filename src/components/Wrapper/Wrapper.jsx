import React from 'react';
import css from './Wrapper.module.css';
export const Wrapper = ({ children }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>{children}</div>
    </section>
  );
};
