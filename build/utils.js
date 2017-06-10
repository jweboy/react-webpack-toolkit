const path = require('path');
const config = require('../config');

const resolvePath = dir => (path.join(__dirname, '..', dir));

console.log('util', process.env.NODE_ENV);
const assetsPath = (_path) => {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    config.build.assetsSubDirectory :
    config.dev.assetsSubDirectory;

  return path.posix.join(assetsSubDirectory, _path);
};

// 获取随机位数的随机字母+数字的字符串
const charsAry = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const getRandomNum = (n) => {
  let res = '';
  for (let i = 0; i < n; i += 1) {
    const num = Math.ceil(Math.random() * 35);
    res += charsAry[num];
  }
  return res;
};

// 获取当前的月、日、时间
const getLocalTime = () => {
  const newDate = new Date();
  const timeString = newDate.toLocaleTimeString().split(':').join('');
  const timer = {
    year: `${newDate.getFullYear()}`,
    month: newDate.getMonth() < 10 ? `0${newDate.getMonth()}` : newDate.getMonth(),
    date: newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate(),
    timeStr: timeString.substr(0, timeString.length - 2).trim(),
  };

  console.log(timer);
  return timer;
};
// 拼接当前时间与随机串
const setDistPath = () => {
  let randomStr = '';
  const timeObj = getLocalTime();
  for (const key in timeObj) {
    randomStr += timeObj[key];
  }
  return randomStr + getRandomNum(6);
}

module.exports = {
  assetsPath,
  setDistPath,
  resolvePath,
};
