set :stage, :staging
set :branch, :staging

set :hostname, 'https://staging-order.restorocket.com'

set :server, 'staging-order.restorocket.com'

server fetch(:server), user: fetch(:user), roles: %w{web app db}
