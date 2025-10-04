function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

greet("Alice", () => console.log("Greeting complete!"));

function delayedMessage(message, delay, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, delay);
}

delayedMessage("This is the first message (1s delay)", 1000, () => {
  delayedMessage("This is the second message (2s delay)", 2000, () => {
    delayedMessage("This is the third message (3s delay)", 3000, () => {
      console.log("All messages displayed!");
    });
  });
});

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed in sequence!");
    });
  });
});
