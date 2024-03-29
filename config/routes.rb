Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:show, :index] do 
      collection do 
        get 'search'
      end
    end
    resources :bookings, only: [:create, :destroy, :index]
    resources :reviews, only: [:create]
  end
end
