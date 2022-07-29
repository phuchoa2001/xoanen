function BeautifyTime(hour, minute, second) {
    hour = `0${hour}`.slice(-2);
    minute = `0${minute}`.slice(-2);
    second = `0${second}`.slice(-2);
    const StringTime = `${hour}:${minute}:${second}`;
    return StringTime;
}
export default BeautifyTime;