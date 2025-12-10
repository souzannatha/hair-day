import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import Text from './text';

export const buttonVariants = cva(
  'inline-flex items-center justify-center cursor-pointer transition rounded-lg group',
  {
    variants: {
      variant: {
        primary: 'bg-yellow hover:border-2 border-yellow-light',
      },
      size: {
        md: 'h-14 py-4.5',
      },
      disabled: {
        true: 'opacity-30 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
    },
  }
);

export const buttonTextVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-gray-900 uppercase',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  variant,
  size,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, disabled, className })} {...props}>
      <Text variant='title-sm' className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
