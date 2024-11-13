import { log } from "console";
import crypto from "crypto";

//createHash()
const hash = crypto.createHash("sha256");

hash.update("password1234");
// console.log(hash.digest("hex"));

//randomBytes()
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
//   console.log(buf.toString("hex"));
});

// createCipherid & createDecipheriv
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
//encrypt
const cipher = crypto.createCipheriv(algorithm , key , iv);
let encrypted = cipher.update('Hello, this is a secret message', 'utf8','hex');
encrypted += cipher.final('hex')
console.log(encrypted);
 //decrype
const decipher = crypto.createDecipheriv(algorithm , key , iv);
let deencrypted = decipher.update(encrypted, 'hex','utf8');
deencrypted += decipher.final('utf8')
console.log(deencrypted);