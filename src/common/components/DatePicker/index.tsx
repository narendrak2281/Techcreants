import React, { useState } from 'react';
import { Text } from 'react-native';
import {default as DatePick} from 'react-native-date-picker';
import { Button } from '../Button';
import { Calendar } from '../../../assets/icons';
import { DateFormat, formatDate } from '../../utils/formatDate';
import { cn } from '../../utils';

type Props = {
  value?: Date | null;
  onChangeText: (date: Date|null) => void;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  format?:DateFormat;
  className?:string;
};



export const DatePicker = ({
  value,
  onChangeText,
  placeholder = 'Select Date',
  minDate,
  maxDate,
  format= 'date',
  className,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        className={cn("w-full h-12 px-3 flex-row items-center justify-start gap-3",className)}
        onPress={() => setOpen(true)}>
        <Calendar size={20} className="text-primary" />
        <Text
          className={`font-body text-lg leading-[20px] ${
            value ? 'text-foreground' : 'text-muted-foreground'
          }`}>
          {value ? formatDate(value,format='dateHiphon') : placeholder}
        </Text>
      </Button>

      <DatePick
        modal
        open={open}
        date={value || new Date()}
        mode="date"
        onConfirm={(date) => {
          setOpen(false);
          onChangeText(date);
        }}
        onCancel={() => {
          setOpen(false)
          onChangeText(null)
        }}
        buttonColor='hsl(220, 80%, 56%)'

        minimumDate={minDate}
        maximumDate={maxDate}
      />
    </>
  );
};

