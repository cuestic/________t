require 'http'
require 'json'
require 'active_support/core_ext/time'

name = '우주소녀'
date = '190831'
response = HTTP.get('https://www.googleapis.com/youtube/v3/search', params: {
  q: "#{name} #{date}",
  key: ENV['YOUTUBE_API_KEY'],
  part: 'snippet',
  maxResults: 10
})

puts JSON.parse(response.body)['items']
