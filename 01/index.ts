import fs from "fs";

export function readFile(): unknown {
  try {
    return JSON.parse(fs.readFileSync("./bd.json", "utf-8"));
  } catch (err) {
    if (
      err != null &&
      typeof err === "object" &&
      "message" in err &&
      typeof err.message === "string"
    ) {
      console.error("Erro ao ler o arquivo:", err.message);
    }
  }
}

export function writeFile(content: any): void {
  try {
    fs.writeFileSync("./bd.json", JSON.stringify(content));
  } catch (err) {
    if (
      err != null &&
      typeof err === "object" &&
      "message" in err &&
      typeof err.message === "string"
    ) {
      console.error("Erro ao escrever arquivo:", err.message);
    }
  }
}
