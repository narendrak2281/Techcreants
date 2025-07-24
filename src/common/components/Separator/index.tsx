import * as SeparatorPrimitive from '@rn-primitives/separator';
import {  View } from 'react-native';
import {  Text } from '../Text';
import * as React from 'react';
import { cn } from '../../utils';

const Separator = React.forwardRef<SeparatorPrimitive.RootRef, SeparatorPrimitive.RootProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[2px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

type ButtonProps = {
  className?: string;
};

const OrDivider = ({className}:ButtonProps) => {

  return (
    <View className={cn("flex-row  items-center space-x-2",className)}>
      <Separator className="flex-1" />
        <Text className="text-muted-foreground text-lg font-subheading mx-3">Or</Text>
      <Separator className="flex-1" />
    </View>
  
  )
}




export { Separator, OrDivider };