function electionsWinners(votes: number[], k: number): number {
  let inTheRunning = 0;

  const mostVotes = Math.max(...votes);
  console.log(mostVotes);

  const sortedVotes = votes.sort((a, b) => b - a);
  console.log(sortedVotes);

  if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
    return 1;
  }

  votes.forEach(voteCount => {
    if (mostVotes - voteCount < k) {
      inTheRunning++;
    }
  });

  return inTheRunning;
}

console.log(electionsWinners([2, 3, 5, 2], 3));

/* 
JavaScript max() Method

Example
Return the number with the highest value:

Math.max(5, 10);  // 10

Definition and Usage
The max() method returns the number with the highest value.

Tip: The min() method returns the number with the lowest value.

*/
