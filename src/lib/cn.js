/**
 * Merge class names, filtering falsy values.
 * @param  {...import('react').ClassValue} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
