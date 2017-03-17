source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
gem 'jekyll', '3.4.2'

group :jekyll_plugins do
  gem 'jekyll-sitemap', '1.0.0'
  gem 'jekyll-seo-tag', '2.1.0'
  gem 'jekyll-feed', '0.9.1'
end
