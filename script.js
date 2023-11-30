const backgroundVideo = document.getElementById('backgroundVideo');
let prevX = 0;
let prevTimestamp = performance.now();

document.addEventListener("mousemove", function(event) {
  const mouseX = event.clientX;

  const currTimestamp = performance.now();
  const timeDiff = currTimestamp - prevTimestamp;
  const speed = Math.abs(mouseX - prevX) / timeDiff;

  // Map speed to playback rate
  const minSpeed = 0.5; // Minimum speed
  const maxSpeed = 5.0; // Maximum speed
  const playbackRate = Math.min(Math.max(speed, minSpeed), maxSpeed);

  // Set the playback rate of the video
  backgroundVideo.playbackRate = playbackRate;

  prevX = mouseX;
  prevTimestamp = currTimestamp;
});

