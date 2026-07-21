import { getMunicipio, buildMunicipioMetadata } from "../_data/almeria-municipios";
import AlmeriaMunicipioLanding from "../components/AlmeriaMunicipioLanding";

const m = getMunicipio("huercal-de-almeria")!;

export const metadata = buildMunicipioMetadata(m);

export default function Page() {
  return <AlmeriaMunicipioLanding m={m} />;
}
