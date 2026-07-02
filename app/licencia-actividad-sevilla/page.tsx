import type { Metadata } from "next";
import CityLandingTemplate, { buildCityLandingMetadata } from "../components/CityLandingTemplate";

export const metadata: Metadata = buildCityLandingMetadata("licencia-actividad", "sevilla");

export default function Page() {
  return <CityLandingTemplate servicio="licencia-actividad" citySlug="sevilla" />;
}
