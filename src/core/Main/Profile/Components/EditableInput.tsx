import React from 'react';
import {View, TextInput, TextInputProps} from 'react-native';
import {Label, Body} from '../../../../common/components';
import {LucideIcon} from 'lucide-react-native';
import {cn} from '../../../../common/utils';

type EditableFieldProps = {
  icon?: LucideIcon;
  label?: string;
  value?: string;
  isEdit?: boolean;
  onChangeText?: (text: string) => void;
  inputProps?: TextInputProps;
  className?: string;
  bodyStyle?: string;
  border?: boolean;
};

export const EditableInput: React.FC<EditableFieldProps> = ({
  icon: Icon,
  label,
  value,
  isEdit,
  onChangeText,
  inputProps,
  className,
  bodyStyle,
  border = true,
}) => {
  return (
    <View
      className={cn(
        'flex-row items-center gap-4',
        border && 'border-b border-border pb-3',
        className,
      )}
    >
      {Icon && (
        <View className="bg-primary/20 p-2 rounded-full">
          <Icon className="text-primary" />
        </View>
      )}

      <View className={cn('flex-1 justify-center items-start')}>
        {label && (
          <Label className="text-muted-foreground font-caption text-md">
            {label}
          </Label>
        )}

        {isEdit ? (
          <TextInput
            value={value}
            onChangeText={onChangeText}
            className="border-b border-primary w-full font-body text-foreground text-xl pt-0 pb-0"
            {...inputProps}
          />
        ) : (
          <Body className={cn('text-xl', bodyStyle)}>{value}</Body>
        )}
      </View>
    </View>
  );
};
