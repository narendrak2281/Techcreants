import * as LabelPrimitive from '@rn-primitives/label';
import * as React from 'react';
import { cn } from '../../utils';

const Label = React.forwardRef<LabelPrimitive.TextRef, LabelPrimitive.TextProps>(
  ({ className, onPress, onLongPress, onPressIn, onPressOut, ...props }, ref) => (
    <LabelPrimitive.Root
      className='web:cursor-default'
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <LabelPrimitive.Text
        ref={ref}
        className={cn(
          'text-lg text-foreground font-subheading leading-none',
          className
        )}
        {...props}
      />
    </LabelPrimitive.Root>
  )
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };