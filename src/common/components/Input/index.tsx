import * as React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {cn} from '../../utils';
import type {LucideIcon} from 'lucide-react-native';
import {Text} from '../Text';
import {Label} from '../Label';

type InputProps = TextInputProps & {
  className?: string;
  placeholderClassName?: string;
  leftIcon?: LucideIcon;
  errorMessage?: string; // ✅ pass error directly
  label?: string;
};

const Input = React.forwardRef<
  React.ComponentRef<typeof TextInput>,
  InputProps
>(
  (
    {
      className,
      placeholderClassName,
      leftIcon: LeftIcon,
      errorMessage,
      label,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
      <View className="w-full">
        {label && (
          <Label className="mb-2 font-subheading text-xl">{label}</Label>
        )}
        <View className={cn(isFocused ? 'border-2 border-primary rounded-xl p-[1px]' : '',)}>
          <View
            className={cn(
              'flex-row items-center rounded-lg bg-background px-3 border border-input',
              props.editable === false && 'opacity-50 web:cursor-not-allowed',
              // isFocused ? 'border-2 border-primary' : 'border border-input',
              className,
            )}>
            {LeftIcon && <LeftIcon size={20} className="mr-2 text-primary" />}
            <TextInput
              ref={ref}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={cn(
                'web:flex h-10 native:h-12 web:w-full flex-1 text-foreground lg:text-sm native:text-lg native:leading-[1.25] placeholder:text-muted-foreground web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
              )}
              placeholderTextColor="#9ca3af"
              {...props}
            />
          </View>
      </View>
          {errorMessage ? (
            <Text className="text-red-500 text-sm mt-1">{errorMessage}</Text>
          ) : null}
        </View>
    );
  },
);

Input.displayName = 'Input';

export {Input};
