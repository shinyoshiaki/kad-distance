import { distance } from "./index";
import sha1 from "sha1";

const a = sha1(Math.random().toString()).toString();
const b = sha1(Math.random().toString()).toString();

console.log(a, b);

console.log(distance(a, b));
