function example(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data === true) {
          resolve(10);
        } else {
          reject(-10);
        }
      }, [1000]);
    });
  }
  
  function run() {
    const want10 = example(true);
    let wantMinus10 = example(false);
  
    setTimeout(() => {
      console.log('want10 ', want10); // Promise {<Pending>}
      console.log('wantMinus10 ', wantMinus10); // Promise {<Pending>}
    }, [0]);
  
    setTimeout(() => {
      console.log('want10 ', want10); // Promise {<Fulfilled>}
      console.log('wantMinus10 ', wantMinus10); // Promise {<Rejected>}
    }, [2000]);
  }
  
  run();