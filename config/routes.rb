Rails.application.routes.draw do

  root 'angular_pages#index'

  # This allows us to do HTML5 routing in our angular application.
  # Every route nested in spa-things just gets pointed back to the index which
  # allows Angular to take care of it on the clientside.
  get '/angular-pages/(*path)' => 'angular_pages#index'

end
