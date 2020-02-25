import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "production":
    path = `${__dirname}/../src/.env.production`;
    console.log(`${__dirname}/../.env.production`)
    break;
  default:
    path = `${__dirname}/../src/.env.development`;
}
dotenv.config({ path: path });
export const ATLAS_URI = process.env.ATLAS_URI;