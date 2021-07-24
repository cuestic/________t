require 'http'
require 'json'
require 'active_support/core_ext/time'

name = '우주소녀'
date_response = HTTP.get('https://lumo.vercel.app/b/160220')
date = JSON.parse(date_response.body)['date']
puts "#{name} #{date}"

response = HTTP.get('https://www.googleapis.com/youtube/v3/search', params: {
  q: "#{name} #{date}",
  key: ENV['YOUTUBE_API_KEY'],
  part: 'snippet',
  maxResults: 10
})

puts JSON.parse(response.body)['items'].size

new_data = { date: Time.parse("20#{date}").next_day.strftime('%y%m%d') }
puts new_data

HTTP.headers({ 'X-Master-Key': ENV['JSONBIN_TOKEN'] }).put('https://lumo.vercel.app/b/160220', json: new_data)
