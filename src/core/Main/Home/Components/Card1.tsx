import { View } from 'react-native'
import { Subtitle, Heading } from '../../../../common/components'
import React from 'react'
import {Star} from '../../../../assets/icons'
import { cn } from '../../../../common/utils';


interface Props {
    title:string;
    subtitle:string;
    icon:React.ElementType;
    className?:string;
}

export const Card1 = ({title,subtitle,icon:Icon,className}:Props) => {
  return (
    <View className={cn('rounded-2xl flex-row flex-1 gap-2 border border-border bg-card shadow-md shadow-foreground/40 dark:shadow-foreground/10 justify-center items-center py-1 pl-2 pr-2',className)}>
      <View className='rounded-full bg-muted p-1 w-[40px] h-[40px] p-[6px] justify-center items-center '>
        <Icon className='color-[#f97316] w-6 h-6'/>
      </View>
      <View className='flex-1  ml-2 '>
        <Subtitle className='text-md text-start' >{title}</Subtitle>
        <Heading className='text-xl text-start' >{subtitle}</Heading>
      </View>

    </View>
  )
}

