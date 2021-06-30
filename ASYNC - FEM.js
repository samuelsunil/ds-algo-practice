// function addAsync(x, y, cb) {
//   setTimeout(function() {
//       cb(x+y)
//   }, 1000)
// }


// var thunk = function(cb) {
//   addAsync( 20, 15, cb)
// }

// thunk(function(sum) {
//  console.log(sum);
// });







function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
	// what do we do here?
	var txt, fn;
	fakeAjax(file, function(response) {
	if(fn)	fn(response); else  txt = response;
	});

	return function(cb) {
		if(txt) cb(txt); else fn=cb;
	}
}

// request all files at once in "parallel"
// ???

// var th1 = getFile("file1");
// var th2 = getFile("file2");
// var th3 = getFile("file3"); 

// th1(function(text1){
//   output(text1);
//   th2(function(text2) {
// 	  output(text2);
// 	  th3(function(text3) {
// 		  output(text3);
// 		  output("Complete!");
// 	  })
//   })
  
// })



function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
	// what do we do here?
	return new Promise((resolve) => {
       fakeAjax(file, resolve)
	})
}

// request all files at once in "parallel"
// ???
var promise1 = getFile("file1")
var promise2 = getFile("file2")
var promise3 = getFile("file3")

// promise1.then((resolve1) => {
// 	output(resolve1);
// 	promise2.then((resolve2) => {
// 		output(resolve2);
// 		promise3.then((resolve3) => {
// 			output(resolve3);
// 			output("complete");
// 		})
// 	}) 
// }) 
	
	
	


promise1.then(output)
.then(function() { return promise2})
.then(output)
.then(function() {return promise3})
.then(output);	
	



