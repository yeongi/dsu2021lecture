function getData(index) {
    //fetch 함수는 promise 객체를 반환 한다.
    return fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
      .then((response) => response.json())
      .then((res) => res.id * 10);
  }
  
  function run() {
    getData(1).then((res) => {
      console.log(res);
    });
  }
  
  function run2() {
    getData(2).then((res) => {
      console.log(res);
    });
  }
  
  //
  
  run();
  run2();
  