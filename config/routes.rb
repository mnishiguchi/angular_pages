Rails.application.routes.draw do

  root 'application#index'

  # Allow angular to handle our client-side routing.
  get '*path' => 'application#index'

end
