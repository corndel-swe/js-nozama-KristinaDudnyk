import express from "express";
const app = express();

/**
 * Hint: res.send() will not accept numbers - you will need to
 * convert your result to a string before using res.send()
 */

// https://tech-docs.corndel.com/express/query-params.html
app.get("/sumup", (req, res) => {
  if (!req.query.n) {
    res.send("0");
  } else {
    const n = parseInt(req.query.n, 10);
    console.log("Its query", n);

    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    res.send(String(sum));
  }
  /**
   * This endpoint accepts a query param, n
   * res.send() the sum of integers from 1 to n
   * if n is not given, respond with 0
   * e.g. /sumup?n=4 => 10
   */
});

// https://tech-docs.corndel.com/express/query-params.html
app.get("/multiply/:x/:y", (req, res) => {
  const x = parseInt(req.params.x, 10);
  const y = parseInt(req.params.y, 10);

  const sum = String(x * y);

  res.send(sum);
  /**
   * This endpoint responds with the product of x and y
   * e.g. /multiply/:3/:5 => 15
   */
});

export default app;
