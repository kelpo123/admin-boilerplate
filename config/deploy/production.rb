set :stage, :production
set :branch, :production

set :hostname, 'https://order.restorocket.com'

set :server, 'order.restorocket.com'

server fetch(:server), user: fetch(:user), roles: %w{web app db}
