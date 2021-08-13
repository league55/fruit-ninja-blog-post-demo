import {app} from "./app";
import {initRope, mouseTick} from "./trail";

initRope(app);

app.ticker.add((delta) => {
  // main game loop
  mouseTick(app);
});