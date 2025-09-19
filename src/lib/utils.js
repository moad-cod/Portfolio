import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputes) => {
    return twMerge(clsx(inputes));
}