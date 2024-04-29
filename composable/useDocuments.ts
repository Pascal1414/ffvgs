import fs from "fs";

const folderPath = "./public/documents";

export default function () {
  const files = fs
    .readdirSync(folderPath)
    .filter((file) => file.match(/.*\.(pdf?)/gi));
  return files;
}
