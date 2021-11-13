let data = 10;

function example(callback){
	setTimeout(() => {
	  data = 20;
		callback(data);
	}, [1000]);
}

function print(newData){ //callback
	console.log("newData: ", newData); // 20
}

function run(){
	example(print);
}

run();

