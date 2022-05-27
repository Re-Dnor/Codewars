function domainName(url) {
  if (url.startsWith('http')) {
    url = url.split('//')[1]
  }
  if (url.startsWith('www')) {
    url = url.split('.')[1];
  }
  return url.split('.')[0];
}

domainName("http://google.com")//, "google");
domainName("http://google.co.jp")//, "google");
domainName("www.xakep.ru")//, "xakep");
domainName("https://youtube.com")//, "youtube");
domainName('http://www.codewars.com/kata/')
