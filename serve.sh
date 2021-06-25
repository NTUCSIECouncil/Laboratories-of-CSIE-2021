#! /bin/bash

npx tailwindcss-cli@latest build -i ./assets/css/base.css -c tailwind.config.js -o ./assets/css/tailwind.css

bundle exec jekyll serve --livereload --config _config.yml