import type { Metadata } from "next";
import CityLandingTemplate, { buildCityLandingMetadata } from "../components/CityLandingTemplate";

export const metadata: Metadata = buildCityLandingMetadata("peritaciones", "madrid");

export default function Page() {
  return <CityLandingTemplate servicio="peritaciones" citySlug="madrid" />;
}
