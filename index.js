document.addEventListener("DOMContentLoaded", function () {
  let data = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ];

  console.log(data);

  const daily = document.querySelector(".daily");
  const weekly = document.querySelector(".weekly");
  const monthly = document.querySelector(".monthly");

  const work = document.getElementById("work");
  const play = document.getElementById("play");
  const study = document.getElementById("study");
  const exercise = document.getElementById("exercise");
  const social = document.getElementById("social");
  const selfCare = document.getElementById("selfCare");


  daily.addEventListener("click", () =>{
    daily.classList.add("active");
    weekly.classList.remove("active");
    monthly.classList.remove("active");
  });
  weekly.addEventListener("click", () =>{
    daily.classList.remove("active");
    weekly.classList.add("active");
    monthly.classList.remove("active");
  });
  monthly.addEventListener("click", () =>{
    daily.classList.remove("active");
    weekly.classList.remove("active");
    monthly.classList.add("active");
  });

  daily.onclick = () => {
    work.innerHTML = ` <div class="main-bg">
       <img src="./images/icon-work.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[0].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[0].timeframes.daily.current}hrs</span></h2>
            <p><sapn id="prefix">Last week</sapn> - <span id="work-previous">${data[0].timeframes.daily.previous}</span>hrs</p>
          </div>
      </div>`;

    play.innerHTML = 
    `<div class="main-bg">
       <img src="./images/icon-play.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[1].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[1].timeframes.daily.current}hrs</span></h2>
            <p><sapn id="prefix">Last week</sapn> - <span id="work-previous">${data[1].timeframes.daily.previous}</span>hrs</p>
          </div>
      </div>`;
      
    study.innerHTML = `<div class="main-bg">
    <img src="./images/icon-study.svg" alt="" class="work">
       <div class="sub-bg">
         <div class="header">
           <h4>${data[2].title}</h4>
           <img src="./images/icon-ellipsis.svg" alt="">
         </div>
         <h2><span id="work-current">${data[2].timeframes.daily.current}hrs</span></h2>
         <p><sapn id="prefix">Last week</sapn> - <span id="work-previous">${data[2].timeframes.daily.previous}</span>hrs</p>
       </div>
   </div>`;

   exercise.innerHTML = `<div class="main-bg">
       <img src="./images/icon-exercise.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[3].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[3].timeframes.daily.current}hrs</span></h2>
            <p><sapn id="prefix">Last week</sapn> - <span id="work-previous">${data[3].timeframes.daily.previous}</span>hrs</p>
          </div>
      </div>`;

   social.innerHTML = `<div class="main-bg">
       <img src="./images/icon-social.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[4].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[4].timeframes.daily.current}hrs</span></h2>
            <p><sapn id="prefix">Last week</sapn> - <span id="work-previous">${data[4].timeframes.daily.previous}</span>hrs</p>
          </div>
      </div>`;


      selfCare.innerHTML = `<div class="main-bg">
       <img src="./images/icon-self-care.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[5].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[5].timeframes.daily.current}hrs</span></h2>
            <p><sapn id="prefix">Last week</sapn> - <span id="work-previous">${data[5].timeframes.daily.previous}</span>hrs</p>
          </div>
      </div>`;
  };



  weekly.onclick = () => {
    work.innerHTML = ` <div class="main-bg">
       <img src="./images/icon-work.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[0].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[0].timeframes.weekly.current}hrs</span></h2>
            <p><sapn id="prefix">Last week</sapn> - <span id="work-previous">${data[0].timeframes.weekly.previous}</span>hrs</p>
          </div>
      </div>`;

    play.innerHTML = 
    `<div class="main-bg">
       <img src="./images/icon-play.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[1].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[1].timeframes.weekly.current}hrs</span></h2>
            <p><sapn id="prefix">Last week</sapn> - <span id="work-previous">${data[1].timeframes.weekly.previous}</span>hrs</p>
          </div>
      </div>`;
      
    study.innerHTML = `<div class="main-bg">
    <img src="./images/icon-study.svg" alt="" class="work">
       <div class="sub-bg">
         <div class="header">
           <h4>${data[2].title}</h4>
           <img src="./images/icon-ellipsis.svg" alt="">
         </div>
         <h2><span id="work-current">${data[2].timeframes.weekly.current}hrs</span></h2>
         <p><sapn id="prefix">Last week</sapn> - <span id="work-previous">${data[2].timeframes.weekly.previous}</span>hrs</p>
       </div>
   </div>`;

   exercise.innerHTML = `<div class="main-bg">
       <img src="./images/icon-exercise.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[3].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[3].timeframes.weekly.current}hrs</span></h2>
            <p><sapn id="prefix">Last week</sapn> - <span id="work-previous">${data[3].timeframes.weekly.previous}</span>hrs</p>
          </div>
      </div>`;

   social.innerHTML = `<div class="main-bg">
       <img src="./images/icon-social.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[4].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[4].timeframes.weekly.current}hrs</span></h2>
            <p><sapn id="prefix">Last week</sapn> - <span id="work-previous">${data[4].timeframes.weekly.previous}</span>hrs</p>
          </div>
      </div>`;


      selfCare.innerHTML = `<div class="main-bg">
       <img src="./images/icon-self-care.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[5].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[5].timeframes.weekly.current}hrs</span></h2>
            <p><sapn id="prefix">Last week</sapn> - <span id="work-previous">${data[5].timeframes.weekly.previous}</span>hrs</p>
          </div>
      </div>`;
  };


  monthly.onclick = () => {
    work.innerHTML = ` <div class="main-bg">
       <img src="./images/icon-work.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[0].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[0].timeframes.monthly.current}hrs</span></h2>
            <p><sapn id="prefix">Last month</sapn> - <span id="work-previous">${data[0].timeframes.monthly.previous}</span>hrs</p>
          </div>
      </div>`;

    play.innerHTML = 
    `<div class="main-bg">
       <img src="./images/icon-play.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[1].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[1].timeframes.monthly.current}hrs</span></h2>
            <p><sapn id="prefix">Last month</sapn> - <span id="work-previous">${data[1].timeframes.monthly.previous}</span>hrs</p>
          </div>
      </div>`;
      
    study.innerHTML = `<div class="main-bg">
    <img src="./images/icon-study.svg" alt="" class="work">
       <div class="sub-bg">
         <div class="header">
           <h4>${data[2].title}</h4>
           <img src="./images/icon-ellipsis.svg" alt="">
         </div>
         <h2><span id="work-current">${data[2].timeframes.monthly.current}hrs</span></h2>
         <p><sapn id="prefix">Last month</sapn> - <span id="work-previous">${data[2].timeframes.monthly.previous}</span>hrs</p>
       </div>
   </div>`;

   exercise.innerHTML = `<div class="main-bg">
       <img src="./images/icon-exercise.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[3].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[3].timeframes.monthly.current}hrs</span></h2>
            <p><sapn id="prefix">Last month</sapn> - <span id="work-previous">${data[3].timeframes.monthly.previous}</span>hrs</p>
          </div>
      </div>`;

   social.innerHTML = `<div class="main-bg">
       <img src="./images/icon-social.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[4].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[4].timeframes.monthly.current}hrs</span></h2>
            <p><sapn id="prefix">Last month</sapn> - <span id="work-previous">${data[4].timeframes.monthly.previous}</span>hrs</p>
          </div>
      </div>`;


      selfCare.innerHTML = `<div class="main-bg">
       <img src="./images/icon-self-care.svg" alt="" class="work">
          <div class="sub-bg">
            <div class="header">
              <h4>${data[5].title}</h4>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
            <h2><span id="work-current">${data[5].timeframes.monthly.current}hrs</span></h2>
            <p><sapn id="prefix">Last month</sapn> - <span id="work-previous">${data[5].timeframes.monthly.previous}</span>hrs</p>
          </div>
      </div>`;
  };
});
