import { forwardRef } from 'react';
import { Button } from '../';
import { Icon } from '../../svg';

type DropdownButtonProps = {
  open: boolean;
  toggle: () => void;
  children: React.ReactNode;
};

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
  ({ ...props }, ref) => {
    const { children, open, toggle } = props as any;
    return (
      <Button
        onClick={toggle}
        type='button'
        className={`btn btn-select ${open ? 'btn-open' : null}`}
        ref={ref}>
        {children}
        <Icon name='dropdown' />
      </Button>
    );
  }
);

export default DropdownButton;
