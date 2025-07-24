'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-tc-primary text-white hover:bg-tc-primary/90 hover:shadow-lg transform hover:scale-105',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-2 border-tc-primary bg-transparent text-tc-primary hover:bg-tc-primary hover:text-white transition-all duration-200',
        secondary:
          'bg-tc-secondary text-white hover:bg-tc-secondary/90 hover:shadow-lg',
        ghost: 'text-tc-text hover:bg-tc-primary/10 hover:text-tc-primary',
        link: 'text-tc-primary underline-offset-4 hover:underline',
        gradient:
          'bg-gradient-to-r from-tc-primary via-tc-secondary to-tc-accent text-white hover:shadow-xl transform hover:scale-105 border-0',
        cta: 'bg-white text-tc-primary border-2 border-white hover:bg-tc-primary hover:text-white hover:border-tc-primary transition-all duration-300 font-semibold shadow-lg',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-12 rounded-lg px-10 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
