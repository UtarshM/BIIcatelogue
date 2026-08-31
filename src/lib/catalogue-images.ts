import bathroom from "@/assets/cat-bathroom.jpg";
import tiles from "@/assets/cat-tiles.jpg";
import flooring from "@/assets/cat-flooring.jpg";
import kitchen from "@/assets/cat-kitchen.jpg";
import lighting from "@/assets/cat-lighting.jpg";
import paints from "@/assets/cat-paints.jpg";
import hero from "@/assets/hero-catalogue.jpg";

export const heroImage = hero;

const imageMap: Record<string, string> = {
  bathroom,
  tiles,
  flooring,
  kitchen,
  lighting,
  paints,
};

export function catalogueImage(key: string | null | undefined): string {
  return (key && imageMap[key]) || hero;
}
