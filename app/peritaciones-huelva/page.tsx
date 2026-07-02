import type { Metadata } from "next";
import CityLandingTemplate, { buildCityLandingMetadata } from "../components/CityLandingTemplate";

export const metadata: Metadata = buildCityLandingMetadata("peritaciones", "huelva");

export default function Page() {
  return <CityLandingTemplate servicio="peritaciones" citySlug="huelva" />;
}
