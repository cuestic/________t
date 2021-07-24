require 'http'
require 'json'
require 'base64'
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

items = JSON.parse(response.body)['items']
git_res = HTTP.post("https://gitee.com/api/v5/repos/nonstop-io/wjsn/contents/items/#{date}.json", json: {
  access_token: ENV['GITEE_TOKEN'],
  content: Base64.encode64(JSON.dump(items)).strip,
  message: "Add #{date}.json"
})
puts git_res.body

new_data = { date: Time.parse("20#{date}").next_day.strftime('%y%m%d') }
puts new_data

HTTP.headers({ 'X-Master-Key': ENV['JSONBIN_TOKEN'] }).put('https://lumo.vercel.app/b/160220', json: new_data)
