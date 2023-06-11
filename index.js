function writeCards(arr, event) {
  const messages = [];
  for (let i = 0; i < arr.length; i++) {
    messages.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }

  return messages;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(i) {
  let count = 0;
  while (i >= count) {
    console.log(i);
    i--;
  }
}
