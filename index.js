const axios = require('axios');
const convert = require('xml-js');

const SendSms = async (username, password, phone, message, longMessage, flash, premium ) => {
    const endpoint = `https://api.masiv.co/SmsHandlers/sendhandler.ashx?action=sendmessage&username=${username}&password=${password}&recipient=${phone}&messagedata=${message}&longMessage=${longMessage}&flash=${flash}&premium=${premium}` 
    try {
        const res = await axios.get(endpoint);
        var result = convert.xml2json(res.data, {compact: true, spaces: 4});
        return JSON.parse(result).response
    } catch (error) {
        console.log("Error" + error);
        return await {err: error}
    }
}
exports.SendSms = SendSms;