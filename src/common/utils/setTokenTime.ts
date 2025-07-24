

export const setTokenTime = (sec: number, cTime: Date = new Date()): number =>
    new Date(cTime.getTime() + sec * 1000).getTime(); // .getTime() extracts the timestamp, sec convert into milliSec
  
export const formatTime = (time:number) => new Date(time).toTimeString()
  