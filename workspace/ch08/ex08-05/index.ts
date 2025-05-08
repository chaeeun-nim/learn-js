// import { plus, minus } from "./math.js";
import { plus as add } from "./math.js";
import YourMath, { plus, Member, minus } from "./math.js"; //권장X

import MyMath from "./math.js";
plus(1, 2);
minus(2, 3);
MyMath.multiply(3, 4);
add(5, 8);
YourMath.minus(8, 3);

const haru: Member = {
  name: "하루",
  age: 5,
};

if (MyMath.minus(5, 6) < 0) {
  import("./math.js").then((dymanicMath) => {
    dymanicMath.plus(7, 8);
  });

  const dymanicMath2 = await import("./math.js");
  dymanicMath2.minus(8, 9);
}
