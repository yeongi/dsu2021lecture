let data = 10;

function inner (value) {
    let newValue = value *10;
    console.log("new Values :", newValue);
}

function example(){
	setTimeout(() => {
	  data  += 10;
      setTimeout(() => {
        data  += 10;
        setTimeout(() => {
            data  += 10;
            inner(data);
          }, [500]);
      }, [500]);
	}, [500]);
}

example();
console.log("data: ", data); // 10