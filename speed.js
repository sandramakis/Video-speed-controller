"use strict";

const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");
const video = document.querySelector(".video");

// handleMove ftn

function handleMove(e) {
  const y = e.pageY - this.offsetTop; // get the full height of the speed div from the page

  const height = y / this.offsetHeight; // get height

  const heightPerc = `${Math.round(height * 100)}%`;
  speedBar.style.height = heightPerc;

  const min = 0.4;
  const max = 4;

  const playbackRate = height * (max - min) + min;
  video.playbackRate = playbackRate;

  speedBar.textContent = `${playbackRate.toFixed(2)}x`;
}

speed.addEventListener("mousemove", handleMove);
