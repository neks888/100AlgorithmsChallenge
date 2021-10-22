function incrementalBackups(
  lastBackupTime: number,
  changes: number[][]
): number[] {
  const filedIds: number[] = [];

  for (let change of changes) {
    const fileBackuptime = change[0];
    const filedId = change[1];

    if (fileBackuptime > lastBackupTime) {
      if (!filedIds.includes(filedId)) {
        filedIds.push(filedId);
      }
    }
  }
  return filedIds.sort((filedId1, filedId2) => filedId1 - filedId2);
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]
  ])
);

/*
** includes() Method

Definition and Usage
The includes() method determines whether a string contains the characters of a specified string.

This method returns true if the string contains the characters, and false if not.

Note: The includes() method is case sensitive.

Example
Check if a string includes "world":

var str = "Hello world, welcome to the universe.";
var n = str.includes("world");
// n= true

*/
