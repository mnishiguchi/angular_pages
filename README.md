# Angular pages

A single-page application using Angular and Rails.

---

#### Routes

```rb
  ...
  root 'angular_pages#index'

  # This allows us to do HTML5 routing in our angular application.
  # Every route nested in spa-things just gets pointed back to the index which
  # allows Angular to take care of it on the clientside.
  get '/angular-pages/(*path)' => 'angular_pages#index'
  ...
```

#### Convention

```
.
├── app
│   ├── assets
│   │   ├── config
│   │   │   └── manifest.js
│   │   ├── images
│   │   ├── javascripts
│   │   │   ├── angular-pages
│   │   │   │   ├── angular-pages.controller.js
│   │   │   │   └── application.js
│   │   │   ├── application.js
│   │   │   ├── cable.js
│   │   │   └── channels
│   │   └── stylesheets
│   │       └── application.css
│   ├── channels
│   │   └── application_cable
│   │       ├── channel.rb
│   │       └── connection.rb
│   ├── controllers
│   │   ├── angular_pages_controller.rb
│   │   ├── application_controller.rb
│   │   └── concerns
│   ├── helpers
│   │   ├── angular_pages_helper.rb
│   │   └── application_helper.rb
│   ├── jobs
│   ├── mailers
│   ├── models
│   └── views
│       ├── angular_pages
│       │   └── index.html.erb
│       └── layouts
│           └── application.html.erb
...
```

`app/assets/javascripts/angular-pages/application.js`

- A main module of the component.
- Angular module: uncapilalized version of corresponding Rails controller.

```js
// In JS folders, an `application.js` file will be treated like a manifest file.
//= require angular
//= require_tree .

(function() {

  // Declare an angular module.
  angular
    .module('angularPages', [
      'angularPages.controller'
    ])

  ...
```

`app/assets/javascripts/angular-pages/angular-pages.controller.js`

- Angular controller: uncapilalized version of corresponding Rails controller.

```js
  ...
  angular
    .module('angularPages.controller')
    .controller('angularPagesController', [
      '$scope',
      angularPagesController
    ])
  ...
```

#### Templates

`app/views/layouts/application.html.erb`

```html
<!DOCTYPE html>
<html>
  <% ng_app = controller.controller_name.camelize(:lower) %>
  <head>
    <title>Angular pages</title>
    <%= csrf_meta_tags %>
    <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track': 'reload' %>
    <%= javascript_include_tag 'application', 'data-turbolinks-track': 'reload' %>
    <%= javascript_include_tag "#{ng_app.underscore.dasherize}/application" if angular_page? %>
  </head>

  <body ng-app="<%= ng_app %>">
    <%= yield %>
  </body>
</html>
```

`app/views/angular_pages/index.html.erb`

```html
<section
  ng-controller="angularPagesController">
  <ul>
    <li ng-repeat="thing in things">
      {{thing.name}}
    </li>
  </ul>
</section>
```

---

#### Install front-end dependencies using bower-rails gem

Initialize

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
