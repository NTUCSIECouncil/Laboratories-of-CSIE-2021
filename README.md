# CSIECouncil-2021

## Usage

1. Install Ruby

2. Install jekyll and bundler gems
```
gem install jekyll bundler
```

3. Install required plugins
```
bundle install
```

4. Start Website Locally
```
bundle exec jekyll serve --livereload
```

* Compile tailwindcss

```
npx tailwindcss-cli@latest build -i ./assets/css/base.css -c tailwind.config.js -o ./assets/css/tailwind.css
```

* Deploy to server

```
bash deploy.sh
```

* Run server locally

```
bash serve.sh
```

[Jekyll Website](https://jekyllrb.com/)
