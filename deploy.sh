#! /bin/bash

bundle exec jekyll build --config _config_prod.yml
cp index.js _site/
rsync -av _site/ 42nd@council.csie.ntu.edu.tw:/var/www/43rd/