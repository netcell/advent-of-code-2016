// logic:
//      N
//    W   E
//      S


// INITIAL TURN:
// LEFT  =    WEST
// RIGHT =    EAST

// IF LEFT
// NORTH? -> WEST      MINUS  TO X
// EAST?  -> NORTH     ADD    TO Y
// SOUTH? -> EAST      ADD    TO X
// WEST?  -> SOUTH     MINUS  TO Y

// IF RIGHT
// NORTH? -> EAST      ADD    TO X
// EAST?  -> SOUTH     MINUS  TO Y
// SOUTH? -> WEST      MINUS  TO X
// WEST?  -> NORTH     ADD    TO Y

function steps(input) {

  var instructions = input.split(', ');
  // take the string input, split each one as an instruction'
  // L41, R52, L2, R2 -> ['L1', 'L2']
  var currPos = [0, 0];
  var dir;

  if ((/L/).test(instructions[0]) === true) {
    dir = 'west';
    var num = instructions[0].replace('L', '');
    var blocks = parseInt(num);
    currPos[0] = currPos[0] - blocks;
  } else {
    dir = 'east';
    var num = instructions[0].replace('R', '');
    var blocks = parseInt(num);
    currPos[0] += blocks;
  }

  // for var i through the array
  for (var i = 1; i < instructions.length; i++) {
    if ((/L/).test(instructions[i]) === true) {
      var num = instructions[i].replace('L', '');
      var blocks = parseInt(num);

      // arr [0, 1]
      // arr [X, Y]

      if (dir == 'north') {
        dir = 'west';
        currPos[0] -= blocks;
      } else if (dir == 'east') {
        dir = 'north';
        currPos[1] += blocks;
      } else if (dir == 'south') {
        dir = 'east';
        currPos[0] += blocks;
      } else if (dir == 'west') {
        dir = 'south';
        currPos[1] -= blocks;
      }
    } else {

      var num = instructions[i].replace('R', '');
      var blocks = parseInt(num);

      if (dir == 'north') {
        dir = 'east';
        currPos[0] += blocks;
      } else if (dir == 'east') {
        dir = 'south';
        currPos[1] = currPos[1] - blocks;
      } else if (dir == 'south') {
        dir = 'west';
        currPos[0] -= blocks;
      } else {
        dir = 'north';
        currPos[1] += blocks;
      }
    }
  console.log(currPos);
  }
}

var str = "L4, L3, R1, L4, R2, R2, L1, L2, R1, R1, L3, R5, L2, R5, L4, L3, R2, R2, L5, L1, R4, L1, R3, L3, R5, R2, L5, R2, R1, R1, L5, R1, L3, L2, L5, R4, R4, L2, L1, L1, R1, R1, L185, R4, L1, L1, R5, R1, L1, L3, L2, L1, R2, R2, R2, L1, L1, R4, R5, R53, L1, R1, R78, R3, R4, L1, R5, L1, L4, R3, R3, L3, L3, R191, R4, R1, L4, L1, R3, L1, L2, R3, R2, R4, R5, R5, L3, L5, R2, R3, L1, L1, L3, R1, R4, R1, R3, R4, R4, R4, R5, R2, L5, R1, R2, R5, L3, L4, R1, L5, R1, L4, L3, R5, R5, L3, L4, L4, R2, R2, L5, R3, R1, R2, R5, L5, L3, R4, L5, R5, L3, R1, L1, R4, R4, L3, R2, R5, R1, R2, L1, R4, R1, L3, L3, L5, R2, R5, L1, L4, R3, R3, L3, R2, L5, R1, R3, L3, R2, L1, R4, R3, L4, R5, L2, L2, R5, R1, R2, L4, L4, L5, R3, L4"


steps(str);
