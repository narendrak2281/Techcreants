import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Title, Body, Subtitle} from '../../../../common/components';
import {Edit2} from '../../../../assets/icons';
import {cn} from '../../../../common/utils';

type Props = {
  title: string;
  isEdit: boolean;
  onEdit: () => void;
  onSave: () => void;
  className?: string;
};

export const HeaderWithEditToggle = ({
  title,
  isEdit,
  onEdit,
  onSave,
  className,
}: Props) => (
  <View className={cn('flex-row justify-between border-b border-border pb-4', className)}>
    <Title className="text-start flex-1">{title}</Title>

    {isEdit ? (
      <TouchableOpacity className="flex-row gap-2" onPress={onSave}>
        <Edit2 className="color-primary" />
        <Subtitle className="font-heading text-primary">Save</Subtitle>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity className="flex-row gap-2" onPress={onEdit}>
        <Edit2 className="color-foreground" />
        <Body>Edit</Body>
      </TouchableOpacity>
    )}
  </View>
);
