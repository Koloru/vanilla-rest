const fs = require("fs");

function writeDataToFile(filename, content) {
	fs.writeFileSync(filename, JSON.stringify(content), "utf-8", (err) => {
		if (err) throw err;
		console.log("Data written to file");
	});
}

function getPostData(req) {
	return new Promise((resolve, reject) => {
		try {
			let body = "";
			req.on("data", (chunk) => {
				body += chunk.toString();
			});
			req.on("end", () => {
				resolve(body);
			});
		} catch (err) {
			reject(err);
		}
	});
}

module.exports = {
	writeDataToFile,
	getPostData,
};
