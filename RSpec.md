```ruby
require 'rake/testtask'

Rake::TestTask.new do |t|
  t.libs << 'spec'
  t.test_files = FileList['**/*_spec.rb']
end

task default: 'test'
```

```ruby
source 'https://rubygems.org'

gem 'minitest', '~> 5.10', '>= 5.10.3'
gem 'minitest-reporters', '~> 1.1', '>= 1.1.18'
```

```ruby
require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!

require 'minitest/spec'
require 'treely/configuration'
```

```ruby
require 'spec_helper'

describe Treely::Configuration do
  describe '#configure' do
    it 'aaa' do
    end
  end
end
```
