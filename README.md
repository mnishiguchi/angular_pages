# Rails serving Angular

A single-page application using Angular and Rails.

---

### Routes

```rb
  ...
  root 'application#index'

  # Allow angular to handle our client-side routing.
  get '*path' => 'application#index'
  ...
```

### Angular Rails Templates
- It makes your `app/assets/templates` folder the "root" reference point for your angular code.

### Install front-end dependencies using bower-rails gem

Initialize

```bash
$ rails g bower_rails:initialize json
```

Add dependencies to `bower.json`

```
{
  "vendor": {
    "name": "bower-rails generated vendor assets",
    "dependencies": {
        "angular": "latest",
        "angular-ui-router": "latest",
        "angular-animate": "latest",
        "bootstrap-sass-official": "latest"
    }
  }
}
```

Install dependencies

Assets are put to `./vendor/assets/bower_components` directory

```
rake bower:install
```


### Gotcha

> While building a bigger app, I ran into that problem and wanted to break my computer. And even though you can solve it by getting rid of html5Mode, it completely kills the benefits of SEO you can achieve as noted in this article.
- jcolemorrison


---

## References

- [http://start.jcolemorrison.com/how-to-try-out-angular-in-your-existing-rails-app/](http://start.jcolemorrison.com/how-to-try-out-angular-in-your-existing-rails-app/)
- [http://start.jcolemorrison.com/angularjs-rails-4-1-and-ui-router-tutorial/](http://start.jcolemorrison.com/angularjs-rails-4-1-and-ui-router-tutorial/)
