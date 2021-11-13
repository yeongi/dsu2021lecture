let data = 10;

function example() {
  return new Promise((resolve) => {
    setTimeout(() => {
      data = 20;
      resolve(data);
    }, [1000]);
  });
}

function print(newData) {
  console.log("newData: ", newData); // 20
}

async function run(){
  const data = await example();
  print(data);
}

run();