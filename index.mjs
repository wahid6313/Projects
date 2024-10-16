import express from "express";

const app = express();

// function sum(n) {
//   let ans = 0;
//   for (let i = 1; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const noOfKidneys = johnKidneys.length;
  const noOfhealthyKidneys = 0;

  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      noOfhealthyKidneys = noOfhealthyKidneys + 1;
    }
  }

  const noOfUnhealthyKidneys = noOfKidneys - noOfhealthyKidneys;
  res.json({
    noOfKidneys,
    noOfhealthyKidneys,
    noOfUnhealthyKidneys,
  });
  // const n = req.query.n;
  // const ans = sum(n);
  // res.send("HI your ans is " + " " + ans);
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "done",
  });
});

app.listen(3000);
