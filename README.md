> # ⚠ This repository has been archived and valid content has been moved to [Laboratories of CSIE](https://github.com/NTUCSIECouncil/Laboratories-of-CSIE)


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
npx tailwindcss-cli@0.1.2 build -i ./assets/css/base.css -c tailwind.config.js -o ./assets/css/tailwind.css
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

[2021 CSIE Council](https://council.csie.ntu.edu.tw/43rd/)

[2020 CSIE Council](https://council.csie.ntu.edu.tw/42nd/)
