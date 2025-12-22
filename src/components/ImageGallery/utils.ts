export const calculateAspectRatio = (width: number, height: number): number => {
  return width / height;
};

export const calculateDimensions = (
  aspectRatio: number,
  baseHeight: number
): { width: number; height: number } => {
  return {
    width: Math.round(baseHeight * aspectRatio),
    height: baseHeight,
  };
};
