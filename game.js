/*
    Little JS Hello World Demo
    - Just prints 'Hello World!'
    - A good starting point for new projects
*/

"use strict";

// import LittleJS module
import * as LJS from "../../dist/littlejs.esm.js";
import * as Ball from "./ball.js";

let playerBall;
let aimingShot = false;
let makingShot = false;
let storedMousePos = { x: 0, y: 0 };
let shotTimer = new LJS.Timer();

const { vec2, rgb, hsl, isOverlapping } = LJS;

///////////////////////////////////////////////////////////////////////////////
async function gameInit() {
  await LJS.box2dInit();
  // called once after the engine starts up
  // setup the game
  playerBall = new Ball.Ball(vec2(-6, 0));
}

///////////////////////////////////////////////////////////////////////////////
function gameUpdate() {
  // called every frame at 60 frames per second
  // handle input and update the game state

  if (!makingShot) {
    if (aimingShot) {
      storedMousePos = LJS.mousePos;
      if (LJS.mouseIsDown(0)) {
        console.log("still aiming");
      }
      if (LJS.mouseWasReleased(0)) {
        console.log("perform shot");
        aimingShot = false;
        makingShot = true;
        playerBall.hitTheBall();
        // storedMousePos = LJS.mousePos;
        document.body.style.cursor = "auto";
        shotTimer.set(1);
      }
    } else {
      if (isOverlapping(vec2(-6, 0), vec2(1), LJS.mousePos)) {
        document.body.style.cursor = "crosshair";
        if (LJS.mouseWasPressed(0)) {
          aimingShot = true;
        }
      } else {
        document.body.style.cursor = "auto";
      }
    }
  }
  console.log(1 - shotTimer.getPercent());
}

///////////////////////////////////////////////////////////////////////////////
function gameUpdatePost() {
  // called after physics and objects are updated
  // setup camera and prepare for render
}

///////////////////////////////////////////////////////////////////////////////
function gameRender() {
  // called before objects are rendered
  // draw any background effects that appear behind objects
  if (aimingShot) {
    LJS.drawLine(playerBall.pos, LJS.mousePos, 0.1);
  }
  if (makingShot) {
    // console.log(playerBall.pos);
    // LJS.drawLine(
    //   playerBall.pos,
    //   storedMousePos.minus(playerBall).scale(1 - shotTimer.getPercent()),
    //   0.1,
    //   LJS.WHITE
    // );
  }

  // Working on getting a dashed line here. In progress.

  // if (aimingShot) {
  //   // LJS.drawLine(LJS.mousePos, playerBall.pos, 0.1);
  //   const distance = LJS.mousePos.distance(playerBall.pos);
  //   if (distance < 2) {
  //     LJS.drawLine(playerBall.pos, LJS.mousePos, 0.1);
  //   } else {
  //     LJS.drawLineList(
  //       [playerBall.pos, playerBall.pos.add(LJS.mousePos).scale(0.5)],
  //       0.1,
  //       LJS.WHITE
  //     );
  //     console.log(LJS.mousePos.distance(playerBall.pos));
  //   }
  // }
}

///////////////////////////////////////////////////////////////////////////////
function gameRenderPost() {
  // called after objects are rendered
  // draw effects or hud that appear above all objects
}

///////////////////////////////////////////////////////////////////////////////
// Startup LittleJS Engine
LJS.engineInit(
  gameInit,
  gameUpdate,
  gameUpdatePost,
  gameRender,
  gameRenderPost,
  ["tiles.png"]
);
