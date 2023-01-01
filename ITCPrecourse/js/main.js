//replace with your user:
const GITHUB_URL = "https://api.github.com/users/yanaysova";

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    // update the profileImage and profileName with the information retrieved.

    profileImage.src = data.avatar_url;

    profileName.innerText = data.name;

  });



//Popmotion spring animation code

const { styler, spring, listen, pointer, value, easing } = window.popmotion;

const ball = document.querySelector('.card');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
  });

// Popmotion card color hover change

const { keyframes } = window.popmotion;

const bodyStyler = styler(document.querySelector('.card'));

keyframes({
  values: ['#AEBDCA', '#7895B2', '#795663', '#AEBDCA'],
  duration: 10000,
  ease: easing.linear,
  loop: Infinity
}).start(bodyStyler.set('background'));