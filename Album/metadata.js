let fs = require("fs");
let axios = require("axios");

let songs = ["WaitingForYou"];
let durations = ["04:25"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs:/QmNsnqDMmRMKgWm2dQrZ4uFGQNUiZ7vmbfgptYyAgfKNVx/media/2`, //xxx = hash
      name: songs[i],
      animation_url: `ipfs:/QmSrVzqvesTHrQQnF9aXZjxDkmSQBeiMcCS5fq1cs9CkPf/media/0`, //xxx = hash
      duration: durations[i],
      artist: "MONO",
      year: "2022"
    },
  });
}

axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY":
        "RfAib1hNi8SQtyJ0y7VXpQzkjttHwY1KfSTQacNH8UWayESM3TatFxesjJUeeMBR",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
