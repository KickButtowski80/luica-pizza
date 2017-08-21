# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!
Acme::Application.configure do
  config.middleware.use Rack::Deflater
end

