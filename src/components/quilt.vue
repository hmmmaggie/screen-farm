<template>
  <div class="quilt-wrap">
    <div class="quilt"></div>
  </div>
</template>

<script>
import * as P5 from "p5";
export default {
  name: "Quilt",
  props: {
    colors: {
      type: Object,
      required: true,
    },
    quiltPatterns: {
      type: Array,
      required: true,
    },
  },
  methods: {
    buildQuilt(sketch) {
      const gridCount = 4;
      let smallBlockSize;
      if (window.innerWidth > window.innerHeight) {
        smallBlockSize = window.innerHeight / gridCount;
      } else {
        smallBlockSize = window.innerWidth / gridCount;
      }
      smallBlockSize = Math.round(smallBlockSize);

      // 1 TRIANGLE
      const drawLeftTriangle = (x, y, dim) => {
        sketch.triangle(x, y, x + dim / 2, y + dim / 2, x, y + dim);
      };

      const drawRightTriangle = (x, y, dim) => {
        sketch.triangle(x + dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
      };

      const drawBottomTriangle = (x, y, dim) => {
        sketch.triangle(x, y + dim, x + dim / 2, y + dim / 2, x + dim, y + dim);
      };

      const drawTopTriangle = (x, y, dim) => {
        sketch.triangle(x, y, x + dim / 2, y + dim / 2, x + dim, y);
      };

      // 2 TRIANGLE COMBO
      function drawBowtie(x, y, dim) {
        drawLeftTriangle(x, y, dim);
        drawRightTriangle(x, y, dim);
      }

      function drawHourGlass(x, y, dim) {
        drawBottomTriangle(x, y, dim);
        drawTopTriangle(x, y, dim);
      }

      function drawLeftBottom(x, y, dim) {
        drawLeftTriangle(x, y, dim);
        drawBottomTriangle(x, y, dim);
      }

      function drawLeftTop(x, y, dim) {
        drawTopTriangle(x, y, dim);
        drawLeftTriangle(x, y, dim);
      }

      function drawRightBottom(x, y, dim) {
        drawBottomTriangle(x, y, dim);
        drawRightTriangle(x, y, dim);
      }

      function drawRightTop(x, y, dim) {
        drawTopTriangle(x, y, dim);
        drawRightTriangle(x, y, dim);
      }

      // 3 TRIANGLE COMBO
      function drawSteepleLeft(x, y, dim) {
        drawTopTriangle(x, y, dim);
        drawLeftTriangle(x, y, dim);
        drawBottomTriangle(x, y, dim);
      }

      function drawSteepleRight(x, y, dim) {
        drawTopTriangle(x, y, dim);
        drawRightTriangle(x, y, dim);
        drawBottomTriangle(x, y, dim);
      }

      function drawSteepleBottom(x, y, dim) {
        drawLeftTriangle(x, y, dim);
        drawRightTriangle(x, y, dim);
        drawBottomTriangle(x, y, dim);
      }

      function drawSteepleTop(x, y, dim) {
        drawTopTriangle(x, y, dim);
        drawRightTriangle(x, y, dim);
        drawLeftTriangle(x, y, dim);
      }

      // 4 TRIANGLE COMBO
      function drawFullSquare(x, y, dim) {
        sketch.rect(x, y, dim, dim);
      }

      // Shape Set Arrays
      // 1 Triangle
      window.triangleSet = [
        drawTopTriangle,
        drawRightTriangle,
        drawBottomTriangle,
        drawLeftTriangle,
      ];

      // 2 Triangle
      window.hourglassSet = [
        drawHourGlass,
        drawBowtie,
        drawHourGlass,
        drawBowtie,
      ];

      window.halfSet = [
        drawRightTop,
        drawRightBottom,
        drawLeftBottom,
        drawLeftTop,
      ];

      // 3 Triangle
      window.steepleSet = [
        drawSteepleTop,
        drawSteepleRight,
        drawSteepleBottom,
        drawSteepleLeft,
      ];

      // 4 Triangles
      window.fullsquareSet = [
        drawFullSquare,
        drawFullSquare,
        drawFullSquare,
        drawFullSquare,
      ];

      function createLargeBlock(callbackFunctionArray, smallBlockSize, corner) {
        let cornerPosX;
        if (corner === 2 || corner === 3) {
          cornerPosX = 2 * smallBlockSize;
        } else {
          cornerPosX = 0;
        }

        let cornerPosY;
        if (corner === 1 || corner === 2) {
          cornerPosY = 0;
        } else {
          cornerPosY = 2 * smallBlockSize;
        }

        const y0 = cornerPosY;
        const y2 = cornerPosY + smallBlockSize;
        const x0 = cornerPosX;
        const x2 = cornerPosX + smallBlockSize;

        const positionSet = [
          [x0, y0, smallBlockSize], // top left
          [x2, y0, smallBlockSize], // top right
          [x2, y2, smallBlockSize], // bottom right
          [x0, y2, smallBlockSize], // bottom left
        ];

        for (let i = 0; i < 4; i++) {
          if (callbackFunctionArray[i]) {
            callbackFunctionArray[i](
              positionSet[i][0],
              positionSet[i][1],
              positionSet[i][2],
              positionSet[i][3]
            );
          }
        }
      }

      function createFourCorner(shapesToDraw) {
        for (let i = 0; i < gridCount; i++) {
          const callBackFuntcionArray = shapesToDraw.map((s) =>
            s ? window[s.shapeList][s.shape] : undefined
          );
          createLargeBlock(callBackFuntcionArray, smallBlockSize, i + 1);

          shiftBlockPositionClockwise(shapesToDraw);

          const alreadyRotated = [];
          for (let j = 0; j < gridCount; j++) {
            if (shapesToDraw[j]) {
              if (!alreadyRotated.includes(shapesToDraw[j].shapeList)) {
                rotateBlocksClockwise(window[shapesToDraw[j].shapeList]);
                alreadyRotated.push(shapesToDraw[j].shapeList);
              }
            }
          }
        }
      }

      function shiftBlockPositionClockwise(someShapeArray) {
        const shapeToMove = someShapeArray.pop() || null;
        someShapeArray.unshift(shapeToMove);
      }

      function rotateBlocksClockwise(someShapeArray) {
        const shapeToMove = someShapeArray.shift();
        someShapeArray.push(shapeToMove);
      }

      sketch.setup = () => {
        sketch.createCanvas(
          gridCount * smallBlockSize,
          gridCount * smallBlockSize
        );
        sketch.background(255, 255, 255);
        sketch.noStroke(0);
        sketch.blendMode(sketch.MULTIPLY);
        for (let i = 0; i < this.quiltPatterns.length; i++) {
          sketch.fill(this.quiltPatterns[i].color);
          createFourCorner(this.quiltPatterns[i].pattern);
        }
      };
    },
  },
  mounted() {
    new P5(this.buildQuilt, this.$el.querySelector(".quilt"));
  },
  beforeUnmount() {
    this.$el.remove();
  },
};
</script>
