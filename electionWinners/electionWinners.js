function electionsWinners(votes, k) {
  let inTheRunning = 0;
  let mostVotes = Math.max(...votes);
  console.log(mostVotes);

  const sortedVotes = votes.sort((a, b) => {
    return b - a;
  });
  console.log(sortedVotes);

  votes.forEach(vote => {
    if (mostVotes - vote < k) {
      inTheRunning++;
    }
  });

  if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
    return 1;
  }

  console.log(inTheRunning);
  return inTheRunning;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
console.log(electionsWinners([2, 3, 5, 2], 0));
