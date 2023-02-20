import React from 'react';
import classes from './text-field.module.scss';

let count = 0;
const generateId = () => {
  count += 1;
  return `TextField_${count}`;
};

type TextFieldProps = JSX.IntrinsicElements['div'] & {
  type?: 'text' | 'color',
  value?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  name?: string,
  label: string,
  inputProps?: Omit<JSX.IntrinsicElements['input'], 'type' | 'id' | 'value' | 'name' | 'onChange'>,
  labelProps?: Omit<JSX.IntrinsicElements['label'], 'htmlFor' | 'children'>,
};

const TextField: React.FC<TextFieldProps> = ({
  type = 'text',
  label,
  value,
  name,
  onChange,
  className,

  inputProps: {
    className: inputClassName,
    ...inputProps
  } = {},

  labelProps: {
    className: labelClassName,
    ...labelProps
  } = {},

  ...divProps
}) => {
  const [id] = React.useState(generateId());

  const divClasses = [classes.container];
  if (className !== undefined) divClasses.push(className);

  const inputClasses = [classes.input];
  if (inputClassName !== undefined) inputClasses.push(inputClassName);

  const labelClasses = [classes.label];
  if (labelClassName !== undefined) labelClasses.push(labelClassName);

  return (
    <div className={divClasses.join(' ')} {...divProps}>
      <input
        className={inputClasses.join(' ')}
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        {...inputProps}
      />
      <label
        className={labelClasses.join(' ')}
        htmlFor={id}
        {...labelProps}
      >
        {label}
      </label>
    </div>
  );
};

export default TextField;
