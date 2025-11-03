import * as LJS from "../../dist/littlejs.esm.js";
const { vec2, Box2dObject, hsl, drawLine, Sound } = LJS;

const hitSound = new Sound([, 0.1, 2e3, , , 0.01, , , , , , , , 1]);
const maxHitDistance = 6;

export class Ball extends Box2dObject {
  constructor(position) {
    const color = hsl(0 / 9, 1, 0 ? 0.5 : 1);
    super(position, vec2(), 0, 0, color);

    // setup pool ball physics
    const friction = 0,
      restitution = 0.95;
    this.addCircle(1, vec2(), 1, friction, restitution);
    this.setLinearDamping(0.4);
    this.setBullet(true);
    this.setFixedRotation(true);
  }

  canHit() {
    return this.getSpeed() < 1;
  }

  hitTheBall() {
    const deltaPos = LJS.mousePos.subtract(this.pos);
    const length = LJS.min(deltaPos.length(), maxHitDistance);
    const hitOffset = deltaPos.normalize(length);
    this.applyAcceleration(hitOffset.scale(-8));
    hitSound.play(this.pos, length, 0.5);
  }

  render() {
    super.render();

    // if (this.canHit()) {
    //   let endPos = LJS.mousePos;
    //   drawLine(this.pos, endPos, 0.1, hsl(0, 1, 0.5, 0.5), vec2(), 0, false);
    // }
  }
}
