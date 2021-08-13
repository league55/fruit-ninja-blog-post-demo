import {app} from "./app";
import {initRope, mouseTick, rope} from "./trail";
import {fpsControl} from "./camera_input";

initRope(app);

app.ticker.add((delta) => {
  // main game loop
  mouseTick(app);
});