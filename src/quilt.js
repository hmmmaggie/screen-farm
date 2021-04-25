export const quilt = (qu) => {
  const gridCount = 4;
  let smallBlockSize;
  if (window.innerWidth > window.innerHeight) {
    smallBlockSize = window.innerHeight / gridCount;
  } else {
    smallBlockSize = window.innerWidth / gridCount;
  }
  smallBlockSize = Math.round(smallBlockSize);
  console.log(smallBlockSize);

  // 1 TRIANGLE
  function drawLeftTriangle(x, y, dim) {
    qu.triangle(x, y, x + dim / 2, y + dim / 2, x, y + dim);
  }

  function drawRightTriangle(x, y, dim) {
    qu.triangle(x + dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
  }

  function drawBottomTriangle(x, y, dim) {
    qu.triangle(x, y + dim, x + dim / 2, y + dim / 2, x + dim, y + dim);
  }

  function drawTopTriangle(x, y, dim) {
    qu.triangle(x, y, x + dim / 2, y + dim / 2, x + dim, y);
  }

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
    qu.rect(x, y, dim, dim);
  }

  // Shape Set Arrays
  // 1 Triangle
  const triangleSet = [
    drawTopTriangle,
    drawRightTriangle,
    drawBottomTriangle,
    drawLeftTriangle,
  ];

  // 2 Triangle
  const hourglassSet = [drawHourGlass, drawBowtie, drawHourGlass, drawBowtie];

  const halfSet = [drawRightTop, drawRightBottom, drawLeftBottom, drawLeftTop];

  // 3 Triangle
  const steepleSet = [
    drawSteepleTop,
    drawSteepleRight,
    drawSteepleBottom,
    drawSteepleLeft,
  ];

  // 4 Triangles
  const fullsquareSet = [
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
      callbackFunctionArray[i](
        positionSet[i][0],
        positionSet[i][1],
        positionSet[i][2]
      );
    }
  }

  function createFourCorner(shapesToDraw) {
    for (let i = 0; i < 4; i++) {
      createLargeBlock(
        shapesToDraw.map((s) => s.shapeList[s.shape]),
        smallBlockSize,
        i + 1
      );
      shiftBlockPostionClockwise(shapesToDraw);
      for (let j = 0; j < shapesToDraw.length; j++) {
        rotateBlocksClockwise(shapesToDraw[j].shapeList);
      }
    }
  }

  function shiftBlockPostionClockwise(someShapeArray) {
    const shapeToMove = someShapeArray.pop();
    someShapeArray.unshift(shapeToMove);
  }

  function rotateBlocksClockwise(someShapeArray) {
    console.log(someShapeArray);
    const shapeToMove = someShapeArray.shift();
    someShapeArray.push(shapeToMove);
  }

  const shapesToDrawA = [
    { shapeList: steepleSet, shape: 0 },
    { shapeList: triangleSet, shape: 2 },
    { shapeList: hourglassSet, shape: 1 },
    { shapeList: halfSet, shape: 3 },
  ];
  const shapesToDrawB = [
    { shapeList: triangleSet, shape: 2 },
    { shapeList: hourglassSet, shape: 1 },
    { shapeList: halfSet, shape: 3 },
    { shapeList: steepleSet, shape: 0 },
  ];
  const shapesToDrawC = [
    { shapeList: triangleSet, shape: 1 },
    { shapeList: hourglassSet, shape: 2 },
    { shapeList: halfSet, shape: 3 },
    { shapeList: steepleSet, shape: 1 },
  ];
  const colorBackground = "#f9eed3";
  const colorA = "#b7230f";
  const colorB = "#164e08";
  const colorC = "#ffb800";
  const quilts = [
    { pattern: shapesToDrawA, color: colorA },
    { pattern: shapesToDrawB, color: colorB },
    { pattern: shapesToDrawC, color: colorC },
  ];
  qu.setup = () => {
    qu.createCanvas(gridCount * smallBlockSize, gridCount * smallBlockSize);
    qu.colorBackground(this.#ffffff)
    qu.noStroke(0);
    qu.blendMode(qu.MULTIPLY);
    for (let i = 0; i < quilts.length; i++) {
      qu.fill(quilts[i].color);
      createFourCorner(quilts[i].pattern);
    }
  };
};
