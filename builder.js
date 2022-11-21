require("esbuild")
    .build({
        entryPoints: ["index.js"],
        bundle: true,
        minify: true,
        watch: true,
        sourcemap: true,
        outfile: "dist/index.js",

    })
    .catch(() => ProcessingInstruction.exit(1));