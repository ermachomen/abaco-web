import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirección permanente (308) del dominio apex a www.
      // El matcher de host de Next se ancla con ^...$ (ver
      // prepare-destination.js: new RegExp(`^${value}$`)), por lo que
      // "ingenierial\\.es" solo coincide con el apex exacto y nunca con
      // www.ingenierial.es → no hay bucle de redirección.
      {
        source: "/:path*",
        has: [{ type: "host", value: "ingenierial\\.es" }],
        destination: "https://www.ingenierial.es/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
