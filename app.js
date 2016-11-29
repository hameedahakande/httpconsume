var request = require('superagent');

function callApi() {
	var url = "https://www.googleapis.com/books/v1/volumes?q=" +  process.argv[2]
	request
	.get(url)
	.end(function(err, res){
		if (err) {
			console.log("error occured")
		}

		if (res && res.status === 200) {
			console.log("Results for calling GET on " + url)
			console.log(res.body)
		}
	 });
}

callApi()