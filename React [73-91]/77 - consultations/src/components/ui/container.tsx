import React from 'react';
import classes from './container.module.scss';

export type ContainerProps = {
  children: React.ReactNode
};

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={classes.container}>{children}</div>
);

export default Container;
