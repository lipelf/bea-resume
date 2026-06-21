import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "192.168.0.26", "192.168.1.*", "192.168.0.*"],
};

export default nextConfig;
