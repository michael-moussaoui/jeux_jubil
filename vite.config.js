import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import { VitePluginFonts } from "vite-plugin-fonts";
import libCss from "vite-plugin-libcss";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteTsconfigPaths(),
		svgrPlugin(),
		libCss(),

		VitePluginFonts({
			google: {
				families: ["Taviraj", "Carter One"],
			},
			server: {
				open: true,
			},
		}),
	],
});
