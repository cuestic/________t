```
%{fs}                   // const fs = require('fs')                     // import "fs"
%{cors}                 // const cors = require('cors')                 // import "cors"
%{loadsh}               // const loadsh = require('lodash')             // import "lodash"
%{lodash/isEmpty}       // const isEmpty = require('lodash/isEmpty')    // import "lodash/isEmpty"
%{coffeescript}         // const coffeescript = require('coffeescript') // import "lodash"
%{gulp-sass}            // const gulpSass = require('gulp-sass')        // import "gulp-sass"
%{gulp-babel} as babel  // const babel = require('gulp-babel')          // import "gulp-babel" as babel
%%{models/user} as User // const User = require('./models/user')        // import_relative "models/user" as User
%%{routes}              // const routes = require('./routes')           // import_relative "routes"
```

```
alias lodash.sortBy // const {sortBy} = lodash
alias models.User   // const {User} = models
```

```
fun index do |request, response|
  return response.json {}
end
```

```
class Lexer do
  fun init do
  end

  fun tokenize do |code, opts={}|
  end

  static do
    fun createClass do
    end

    fun empty? do
      return true
    end
  end
end
```

```
for 0..<10 do |_, index|
end
```

```
loop do
  break if _
end
```

```
class A extends B do
end
```

* send
* swap!
* type
* typeof
* try do
* catch
* after
* end
* throw
* rescue
* raise
* a&.b&.c

```
{...values}
[...values]
```

* unless|if
* or|and|not

```
eq?
equal?
```
