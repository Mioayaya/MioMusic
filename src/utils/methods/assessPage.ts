export const assessPage = ():boolean => {
  const ua = window.navigator.userAgent.toLocaleLowerCase();
  const reg = /iphone|android|symbianos|windows\sphone/g;

  if(reg.test(ua)) {
    // 手机端
    return false;
  }else {
    // pc端
    return true;
  }  
}
