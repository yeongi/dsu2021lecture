let data = 10;

function example() { //프로 미스 객체를 리턴
  return new Promise((resolve) => {
    setTimeout(() => {
      data = 20;
      resolve(data);
    }, [1000]);
  });
}

function print(newData) {
  console.log("newData: ", newData);
}

function run(){ // 프로미스에서 결과를 만족하면 print()실행
	example().then((result) => {
	  print(result); 
	})
    .then(()=>{
        console.log("할일 2번째 data",data);
    });

	//console.log(result); // undefined
}

run();
console.log("프로미스를 건너뛴 데이터 ", data);