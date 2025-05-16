source "https://rubygems.org"

# This gem is installed by default by GitHub Pages. When running locally,
# we use it to simulate the GitHub Pages environment.
group :jekyll_plugins do
  # Use the github-pages gem to make sure you have the same
  # Jekyll version and plugins as GitHub Pages.
  gem "github-pages", "~> 230" # Use a recent version number here

  # Added to potentially fix LoadError for 'csv'
  gem "csv"

  # Added to fix LoadError for 'webrick' on newer Ruby versions
  gem "webrick"
end

# Gem recommended for Windows for file watching (improves performance)
gem "wdm", "~> 0.1" if Gem.win_platform?

# Sometimes needed on Windows for timezone data (uncomment if you encounter issues)
# gem "tzinfo-data" if Gem.win_platform?

# If you need to use any *additional* whitelisted plugins not included
# with the github-pages gem, list them here in the same group above:
# group :jekyll_plugins do
#   gem "jekyll-sitemap"
#   gem "jekyll-feed"
#   gem "jekyll-seo-tag"
# end