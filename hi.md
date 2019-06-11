```ruby
module M
  def self.included(base)
    base.extend ClassMethods
    base.class_eval do
      scope :disabled, -> { where(disabled: true) }
    end
  end

  module ClassMethods
    ...
  end
end
```

<details>
  <summary><b>Examples</b></summary>
  <ul>
    <li><a href="/examples/head-elements">Head elements</a></li>
    <li><a href="/examples/layout-component">Layout component</a></li>
  </ul>
</details>
