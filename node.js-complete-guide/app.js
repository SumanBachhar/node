const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
});
server.listen(3000);

for (let i = 1; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
