const esbuild = require("esbuild");

esbuild
    .build({
        entryPoints: ["index.js"],
        bundle: true,
        minify: true,
        watch: true,
        sourcemap: true,
        outfile: "dist/index.js",
    })
    .catch(() => process.exit(1));
