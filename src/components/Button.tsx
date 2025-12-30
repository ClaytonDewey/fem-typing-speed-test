import React, { forwardRef } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', ...props }, ref) => {
    return <button type={type} ref={ref} {...props} />;
  }
);

Button.displayName = 'Button';

export default Button;
