import SendBird from 'sendbird';

export const login = (user, nick) => {
  const sb = SendBird({ 'appId': '6B64BB68-8779-4825-BD6E-FACF52834911' })
  return new Promise((resolve, reject) => {
    sb.connect(user, (user, error) => {
      if (error) {
        console.error(error)
        reject('login failed')
      } else {
        sb.updateCurrentUserInfo(nick, null, (user, error) => {
          if (error) {
            console.error(error)
            reject('update user failed')
          } else {
            resolve({ connection: sb, user })
          }
        })
      }
    })
  })
}

export const join = (sb) => {
  return new Promise((resolve, reject) => {
    sb.OpenChannel.getChannel('sendbird_open_channel_32224_16ccd1b6726029d07118ad6d6af623d5bb9bc5ba', function (channel, error) {
      if (error) {
        console.error(error)
        reject('Failed to get channel')
      }

      channel.enter(function (response, error) {
        if (error) {
          console.error(error)
          reject('Failed to enter channel')
        } else {
          console.log('joined channel')
          resolve(channel)
        }
      })
    })
  })
}

export const say = (channel, message) => {
  return new Promise((resolve, reject) => {
    channel.sendUserMessage(message, function (message, error) {
      if (error) {
        console.error(error);
        reject('failed to send')
      } else {
        console.log('sent', message);
        resolve(message)
      }
    })
  })
}

export const hear = (sb, callback) => {
  var ChannelHandler = new sb.ChannelHandler();

  ChannelHandler.onMessageReceived = callback
  sb.addChannelHandler('UNIQUE_HANDLER_ID', ChannelHandler)
}


