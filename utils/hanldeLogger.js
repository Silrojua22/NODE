const slackWebhook = require('@slack/webhook');

const webhook = new slackWebhook.IncomingWebhook(process.env.SLACK_WEBHOOK)

const loggerStream = {
    write: message => {
        webhook.send({
            text: message
        })
        console.log("Capturando log", message);
    }
}


module.exports = loggerStream;