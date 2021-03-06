const emojis = require('emojilib/simplemap.json')

const emojify = text => {
  let emoticons = {
    ':)': ':slightly_smiling_face:',
    ':(': ':slightly_frowning_face:',
    ':/': ':confused:',
    ':p': ':stuck_out_tongue:',
    ':P': ':stuck_out_tongue:',
    ':D': ':smiley:',
    ';)': ':wink:'
  }

  // Ascii emoticons to :emoji:
  text = Object.keys(emoticons).reduce((text, emoticon) => {
    return text.split(emoticon + ' ').join(emoticons[emoticon] + ' ')
  }, text)

  // :emoji: to unicode emojis
  return text.replace(/:(\w+):/gi, (str, name) => emojis[name] || str)
}

module.exports = emojify
