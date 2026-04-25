const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");

function walkAndClean(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      walkAndClean(fullPath);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const lowerName = entry.name.toLowerCase();

    if (lowerName === "robots.txt") {
      continue;
    }

    if (lowerName.endsWith(".txt")) {
      fs.unlinkSync(fullPath);
    }
  }
}

if (!fs.existsSync(outDir)) {
  process.exit(0);
}

walkAndClean(outDir);
