import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const SRORAGE_KEY = 'videoplayer-current-time';
const THROTTLE_DELAY = 1000;

const onPlay = function (data) {
  localStorage.setItem(SRORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, THROTTLE_DELAY));

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}

// console.log(Player);
