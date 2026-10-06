// Bundles the app into one HTML fragment (no <html>/<head>/<body>) for hosting
// as a claude.ai Artifact. Output: dist/apes-frq-predictor.html
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const read = f => fs.readFileSync(path.join(root, f), "utf8");

const html = read("index.html");
const title = html.match(/<title>[\s\S]*?<\/title>/)[0];
const body = html.match(/<body>([\s\S]*)<\/body>/)[1]
  .replace(/<script src="([^"]+)"><\/script>\s*/g, "");
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)]
  .map(m => "<script>\n" + read(m[1]).replace(/<\/script/gi, "<\\/script") + "\n</script>").join("\n");

const out = [
  title,
  "<style>\n" + read("css/styles.css") + "\n</style>",
  body.trim(),
  "<script>window.APES_EMBEDDED = true;</script>",
  scripts
].join("\n");

fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist", "apes-frq-predictor.html"), out);
console.log("Wrote dist/apes-frq-predictor.html (" + Math.round(out.length / 1024) + " KB)");
