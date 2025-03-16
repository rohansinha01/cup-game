/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// const user: (string | number)[] = ['hc', 1]
// biome-ignore lint/style/useConst: <explanation>
var user;
// eslint-disable-next-line prefer-const
user = ['hc', 131, true];
// user = [123, 'sdf', false] can't work becaue tuple
// biome-ignore lint/style/useConst: <explanation>
// eslint-disable-next-line prefer-const
// biome-ignore lint/style/useConst: <explanation>
var rgb = [255, 123, 112];
console.log(rgb);
var newLUser = [112, "r@r.com"];
newLUser[1] = "hc.com";
newLUser.push(true);
console.log(newLUser);
