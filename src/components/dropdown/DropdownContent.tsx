import { forwardRef } from 'react';

type DropdownContentProps = {
  open: boolean;
  children: React.ReactNode;
};

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  (props, ref) => {
    const { children, open, ...rest } = props;
    return (
      <div
        ref={ref}
        {...rest}
        className={`dropdown__content ${open ? 'content-open' : ''}`}>
        {children}
      </div>
    );
  }
);

export default DropdownContent;
