import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "next-env.d.ts",
      "src/sanity.types.ts",
    ],
  },
  ...nextCoreWebVitals,
];

export default config;
