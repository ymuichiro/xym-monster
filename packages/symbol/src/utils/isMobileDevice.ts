export default function isMobileDevice(): Boolean {
  var userAgent = navigator.userAgent;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    return true;
  } else {
    return false;
  }
}
