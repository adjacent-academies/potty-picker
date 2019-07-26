var express = require("express");
var router = express.Router();

// const homepagebutton = document.querySelector("#homepagebutton");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Bathroom Mapper" });
});

// homepagebutton.addEventListener("click", event => {
//   window.location.href = "www.google.com";
// });

// $("#homepagebutton").on("click",  () => {
//   $("homepagebutton").transition('pulse')

// }

// $("#greenbutton").on("click", () => {
//   // pulse the button
//   $("#greenbutton").transition('pulse')
//   console.log($("#greenbuttonsound"))
//   function stopAudio() {
//       let sounds = document.getElementsByTagName('audio');
//       for(i=0; i<sounds.length; i++) sounds[i].pause();
//      };
//   document.querySelector("#greenbuttonsound").play();
// });

// function toLists() {
//   window.location.href = '';
// }

// toLists()
module.exports = router;
