export const convertRgbaToLighterShade = (color: string) => {
  const [r, g, b] = color.match(/\d+/g) as string[];
  return `rgba(${r}, ${Number(g) + 30}, ${Number(b) + 30})`;
}
