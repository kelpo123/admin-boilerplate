lock '~> 3.13'

set :application, 'RestorocketOrdering'
set :repo_url, 'git@gitlab.com:reyner.giovanni/restorocket-ordering.git'
set :project_url, 'https://gitlab.com/reyner.giovanni/restorocket-ordering'
set :user, 'ec2-user'
set :deploy_to, "/home/#{fetch(:user)}/reyner.giovanni/restorocket-ordering/#{fetch(:stage)}"
set :deploy_via, :remote_cache
set :keep_releases, 5

append :linked_files, '.env'

namespace :deploy do
  desc 'Build app'
  task :build_app do
    on "#{fetch(:user)}@#{fetch(:server)}" do
      within current_path do
        execute 'npm', 'run', 'build'
      end
    end
  end
  after :publishing, :build_app

  desc 'Notification service for deployment'
  task :notification do
    on "#{fetch(:user)}@#{fetch(:server)}" do
      previous_revision = capture "cd #{fetch(:deploy_to)}/releases && LS_PREVIOUS=`ls` && set -- $LS_PREVIOUS && cat $4/REVISION"
      current_revision = capture "cat #{current_path}/REVISION"

      payload = <<-EOF
*Deploy to #{fetch(:stage)} for Frontend*

#{Time.now.strftime('%A, %d %B %Y %H:%M:%S')}

The #{fetch(:application)} Frontend application was successfully deployed with the #{release_timestamp} release in the *#{fetch(:stage)}* environment :rocket: :rocket: :rocket:

Previous Revision: #{previous_revision}
Current Revision: #{current_revision}

Compare Revision: #{fetch(:project_url)}/compare/#{previous_revision}...#{current_revision}

Hostname:
#{fetch(:hostname)}

_don't forget coding today_  :wink:
      EOF
      HTTParty.post('https://hooks.slack.com/services/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',
                    body: { text: payload }.to_json,
                    headers: { 'Content-Type': 'application/json' } )
    end
  end
  after :finished, :notification
end
