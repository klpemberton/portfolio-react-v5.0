/**
 * Utility function to conditionally join class names
 * @param classes - Array of class names (strings, objects, or arrays)
 * @returns Joined class name string
 */
export const classNames = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(' ');
};
