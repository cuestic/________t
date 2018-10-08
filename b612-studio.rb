git_name = %{b612-studio}
project_name = Dir.pwd.split('/').last

puts %{git init}
puts %{git config --local user.name #{git_name}}
puts %{git config --local user.email #{git_name}@github.io}
puts %{git remote add origin git@gitlab.com:#{git_name}/#{project_name}.git}
puts %{git add .}
puts %{git commit -m "#{git_name} <#{git_name}@github.io>"}
puts %{git push origin master -f}
