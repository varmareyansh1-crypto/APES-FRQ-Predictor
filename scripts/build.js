// Bundles the app into single HTML files:
//   APES-FRQ-Predictor.html        standalone page to open in any browser (committed)
//   dist/apes-frq-predictor.html   fragment (no <html>/<head>/<body>) for hosting as a claude.ai Artifact
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

const style = "<style>\n" + read("css/styles.css") + "\n</style>";

const hosted = [title, style, body.trim(), "<script>window.APES_EMBEDDED = true;</script>", scripts].join("\n");
fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist", "apes-frq-predictor.html"), hosted);

const head = html.match(/<head>([\s\S]*?)<\/head>/)[1].replace(/\s*<link rel="stylesheet" href="css\/styles.css">/, "");
const standalone = "<!doctype html>\n<html lang=\"en\">\n<head>" + head.trimEnd() + "\n" + style + "\n</head>\n<body>\n" +
  body.trim() + "\n" + scripts + "\n</body>\n</html>\n";
fs.writeFileSync(path.join(root, "APES-FRQ-Predictor.html"), standalone);

console.log("Wrote APES-FRQ-Predictor.html (" + Math.round(standalone.length / 1024) + " KB) and dist/apes-frq-predictor.html");
