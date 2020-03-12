# masiv-sms
This packages help to send sms from [masiv](https://masiv.com/)
For install package just run:
```sh
$ npm i masiv-sms
```
Import and using package
```sh
const masivSms = require('masiv-sms');
const username = 'foo';
const password = '********';
const phone = '' // international format;
const message = '';
const longMessage = false; // or a long message
const flash = false;
const premium = false;
masivSms.SendSms(username, password, phone, message, longMessage, flash, premium)
```
