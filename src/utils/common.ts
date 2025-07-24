import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge and dedupe Tailwind CSS classes
 * @param inputs - Array of class values to merge
 * @returns Merged and deduped class string
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Generate random ID string
 * @param length - Length of the ID (default: 8)
 * @returns Random string ID
 */
export function generateId(length: number = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}

/**
 * Sleep utility for async operations
 * @param ms - Milliseconds to sleep
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if code is running in browser
 */
export const isBrowser = typeof window !== 'undefined';

/**
 * Check if code is running in development
 */
export const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * Check if code is running in production
 */
export const isProduction = process.env.NODE_ENV === 'production';
