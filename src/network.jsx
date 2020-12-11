const axios = require('axios').default;

export default async (cb) => {
    console.log("sendCommands")

    try {
        let response = await axios.get('http://192.168.5.89/cm?cmnd=Backlog%20Power%20on%3Bchannel1%2030%3BDelay%2020%3Bchannel1%2042%3BPower%20off', { crossdomain: true });
        console.log(response);
        response = await axios.get('http://192.168.5.89/cm?cmnd=channel1%2030', { crossdomain: true });
        console.log(response);
        setTimeout(async () => {
            response = await axios.get('http://192.168.5.89/cm?cmnd=channel1%2042', { crossdomain: true });
            console.log(response);
            response = await axios.get('http://192.168.5.89/cm?cmnd=Power%20off', { crossdomain: true });
            console.log(response);
            cb()
        }, 2000)
    } catch (error) {
        console.error(error);
    }

    return "Prima richieste effettuate!"
}