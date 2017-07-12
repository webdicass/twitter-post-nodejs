const Twit = require('twit')

const T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

if (!process.argv[2]) {
  console.log('Please type something to tweet')
  return
}

T.post('statuses/update', { status: process.argv[2]}, (err, data, response) => {
  if (!err) {
    console.log('It worked!')
  }
})
