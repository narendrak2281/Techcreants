import type { LucideIcon } from 'lucide-react-native';
import {SvgProps } from 'react-native-svg'
import { cssInterop } from 'nativewind';
import type { ComponentType } from 'react';
/**
 * Applies utility-based styles (such as color and opacity) to a Lucide icon component
 * using the nativewind `cssInterop` function.
 *
 * @param {LucideIcon} icon - A LucideIcon component from `lucide-react-native`.
 * @returns {void} - This function does not return any value. It directly modifies the icon's style.
 */

export const iconWithClassName = (icon: LucideIcon) => {
  cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}


export const svgWithClassName = (icon: ComponentType<SvgProps>) => {
  cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
        // optional: if your SVGs accept `fill` or `stroke`
        fill: true,
        stroke: true,
        width:true,
        height:true,
      },
    },
  });
};