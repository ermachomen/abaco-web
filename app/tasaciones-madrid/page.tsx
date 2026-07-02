import type { Metadata } from "next";
import CityLandingTemplate, { buildCityLandingMetadata } from "../components/CityLandingTemplate";

export const metadata: Metadata = buildCityLandingMetadata("tasaciones", "madrid");

export default function Page() {
  return <CityLandingTemplate servicio="tasaciones" citySlug="madrid" />;
}
