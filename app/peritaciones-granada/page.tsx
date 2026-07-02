import type { Metadata } from "next";
import CityLandingTemplate, { buildCityLandingMetadata } from "../components/CityLandingTemplate";

export const metadata: Metadata = buildCityLandingMetadata("peritaciones", "granada");

export default function Page() {
  return <CityLandingTemplate servicio="peritaciones" citySlug="granada" />;
}
