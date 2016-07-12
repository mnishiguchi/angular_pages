# Angular SPA Rails

A single-page application using Angular and Rails.

---

#### Install front-end dependencies using bower-rails gem

Initialze

```
 rails g bower_rails:initialize
```

Add dependencies to `Bowerfile` using [Ruby DSL](# https://github.com/42dev/bower-rails#ruby-dsl-configuration
)

```
asset 'angular'
```

Install dependencies

By default assets are put to `./vendor/assets/bower_components` directory

```
rake bower:install
```

---

## References

- [http://start.jcolemorrison.com/how-to-try-out-angular-in-your-existing-rails-app/](http://start.jcolemorrison.com/how-to-try-out-angular-in-your-existing-rails-app/)
