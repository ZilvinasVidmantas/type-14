import React from 'react';
import classes from './section.module.scss';
import Container from './container';

type SectionProps = {
  children: React.ReactNode,
  title: string,
  className?: string,
};

const Section: React.FC<SectionProps> = ({
  children,
  title,
  className,
}) => {
  const allClasses = [classes.section];
  if (className !== undefined) allClasses.push(className);

  return (
    <section className={allClasses.join(' ')}>
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </section>
  );
};

export default Section;
