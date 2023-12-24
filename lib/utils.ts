import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Delays the execution of a Promise by a specified timeout with a minimum delay.
 *
 * @param result - The result to be resolved in the Promise after the delay.
 * @param timeout - The duration of the delay in milliseconds.
 * @param minDelay - The minimum duration of the delay in milliseconds.
 * @returns A Promise that resolves to the provided result after the specified delay.
 */
export function delay<T>(
  result: T,
  timeout: number,
  minDelay: number = 3000,
): Promise<T> {
  const actualDelay = Math.max(timeout, minDelay);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, actualDelay);
  });
}
