import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
