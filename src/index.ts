import * as util from "./util";

export function distance(a16: string, b16: string) {
  if (a16.length !== 40 || b16.length !== 40) {
    throw new Error("error bit length");
  }
  let a = util
    .convertBase(a16, 16, 2)
    .toString()
    .split("");
  let b = util
    .convertBase(b16, 16, 2)
    .toString()
    .split("");

  let xor;
  if (a.length > b.length) xor = new Array(a.length);
  else xor = new Array(b.length);

  for (let i = 0; i < xor.length; i++) {
    xor[i] = parseInt(a[i], 10) ^ parseInt(b[i], 10);
  }
  let xored = xor.toString().replace(/,/g, "");
  let n10 = parseInt(util.convertBase(xored, 2, 10).toString(), 10);

  let n, i;
  for (i = 0; ; i++) {
    n = 2 ** i;
    if (n > n10) break;
  }
  return i;
}
