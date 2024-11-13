import url, { URLSearchParams } from 'url';

const urlString = 'https://www.google.com/search?g=hello+world'

// url object
const urlObj = new URL(urlString)
console.log(urlObj);

// format()
console.log(url.format(urlObj));

// import.meta.url - file URL
console.log(import.meta.url);

// fileURLPath()
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search)

const params = new URLSearchParams(urlObj.search)
console.log(params);
console.log(params.get('q'));
