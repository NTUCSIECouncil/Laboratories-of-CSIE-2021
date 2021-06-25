#! /bin/bash

npx tailwindcss-cli@latest build -i ./assets/css/base_prod.css -c tailwind.config.js -o ./assets/css/tailwind.css

bundle exec jekyll build --config _config_prod.yml

rsync -av _site/ 42nd@council.csie.ntu.edu.tw:/var/www/43rd/