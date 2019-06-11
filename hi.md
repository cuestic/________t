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

![https://img.shields.io/badge/%E5%AE%87%E5%AE%99%E5%B0%91%E5%A5%B3-WJSN-38d9a9.svg?style=for-the-badge&logo=codepen&logoColor=edf2ff&labelColor=66d9e8](https://img.shields.io/badge/%E5%AE%87%E5%AE%99%E5%B0%91%E5%A5%B3-WJSN-38d9a9.svg?style=for-the-badge&logo=codepen&logoColor=edf2ff&labelColor=66d9e8)
