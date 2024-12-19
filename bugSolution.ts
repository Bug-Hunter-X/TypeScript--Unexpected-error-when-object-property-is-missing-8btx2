function printCoord(pt: { x?: number; y?: number }) {
  if (pt.x === undefined || pt.y === undefined) {
    console.error("Coordinate x or y is missing!");
    return;
  }
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3 });
printCoord({});