import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/components/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "@tanstack/react-table", "@radix-ui/react-slot"],
});
