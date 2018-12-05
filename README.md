# hexo-theme-Cxo
A cool ，simple & beautiful theme for Hexo. 🍄

<img src="./source/img/demo/demo.png"/>

<p align="center">
<img alt="version" src="https://img.shields.io/badge/version-1.0.5-green.svg">
<a href="https://longlongyu.github.io/"><img alt="author" src="https://img.shields.io/badge/author-longlongyu-orange.svg"/></a>
<a href="https://hexo.io"><img alt="hexo" src="https://img.shields.io/badge/hexo-3.0+-0e83cd.svg"/></a>
<a href="https://nodejs.org/"><img alt="license" src="https://img.shields.io/github/license/mashape/apistatus.svg"></a>
</p>

## Online demo
Watch online demo：[Mr.Long's Blog](https://longlongyu.github.io/ "Mr.Long's Blog")

## Documentation
- [中文文档](./README_CN.md)

## Browser Support
IE >= 10

## Instruction
- The Cxo is my first time to make the Hexo theme, if you have any suggestions and ideas for optimization and functionality, please tell me, I will correct them.
- You are welcomed to create a new [issue](https:/github.com/Longlongyu/hexo-theme-Cxo/issues "new issue"). If there is any problem when installing and using this theme.
- Your support is my motivation, so I will keep updating, star it if you like it.

## Install
1. Execute the following commands in **Hexo directory**.

``` shell
git clone -b master https://github.com/Longlongyu/hexo-theme-Cxo themes/Cxo
```

2. Change the `theme` property to `Cxo` of `_config.yml` in **Hexo directory**.

``` yaml
theme: Cxo
```

3. If you don't have `jade renderer` and `sass renderer`, follow this:

``` shell
npm install hexo-renderer-jade hexo-renderer-sass --save
```

## Version

- 1.0.0 - 『Have basic blogging features』
- 1.0.1 - 『Added some comment plugins』
- 1.0.2 - 『The switch status of the sidebar is now saved』
- 1.0.3 - 『Added display of pinned articles』
- 1.0.4 - 『Display article recent modification time』
- 1.0.5 - 『Added custom timestamps and optimized the article directory. Now, you can define a summary image and add Baidu statistical』
- 1.0.6 - 『Fixed issue of the tab-bar display on mobile.』

## Theme Update
Jump into the Cxo folder, follow this:

``` shell
git pull
```

## Other configuration

- [Enable about page](https://github.com/Longlongyu/hexo-theme-Cxo/wiki/%E5%BC%80%E5%90%AFabout%E9%A1%B5)
- [Enable tags page](https://github.com/Longlongyu/hexo-theme-Cxo/wiki/%E5%BC%80%E5%90%AFtags%E9%A1%B5)
- [Enable word count and reading time](https://github.com/Longlongyu/hexo-theme-Cxo/wiki/%E5%BC%80%E5%90%AF%E5%AD%97%E6%95%B0%E7%BB%9F%E8%AE%A1%E5%8F%8A%E9%98%85%E8%AF%BB%E6%97%B6%E9%97%B4)
- [Enable article top](https://github.com/Longlongyu/hexo-theme-Cxo/wiki/%E5%BC%80%E5%90%AF%E6%96%87%E7%AB%A0%E7%BD%AE%E9%A1%B6)
- [Enable article most modified time](https://github.com/Longlongyu/hexo-theme-Cxo/wiki/%E5%BC%80%E5%90%AF%E6%96%87%E7%AB%A0%E6%9C%80%E8%BF%91%E4%BF%AE%E6%94%B9%E6%97%B6%E9%97%B4)
- [Modify timestamp format](https://github.com/Longlongyu/hexo-theme-Cxo/wiki/%E4%BF%AE%E6%94%B9%E6%97%B6%E9%97%B4%E6%88%B3%E6%A0%BC%E5%BC%8F)
- [Define summary image](https://github.com/Longlongyu/hexo-theme-Cxo/wiki/%E6%96%87%E7%AB%A0%E6%B7%BB%E5%8A%A0%E6%91%98%E8%A6%81%E5%9B%BE%E7%89%87)
- [Some hexo's markdown syntax](https://github.com/Longlongyu/hexo-theme-Cxo/wiki/%E4%B8%80%E4%BA%9Bhexo%E7%9A%84markdown%E8%AF%AD%E6%B3%95)

## Theme configuration

```yaml
# —————————— Profile Column —————————— #
# Avatar
avatar:
# Author
author:
# Signature
signature:
# Links 
friends:
  friendA:
  friendB:
  friendC:
# Social information
social:
  email:
  github:
  weibo:
  facebook:
  twitter:
  rss:

# —————————— Site —————————— #
# Title of the site (each article will be followed by this value to help SEO)
SEO_title:
# Main title (title in site banner)
main_title:
# Subtitle
subtitle:
# Header image (image of site banner)，the default is site_header_image，site_header_image is required field
site_header_image:
post_header_image:
about_header_image: 

# —————————— Indivdual —————————— #
# icon
favicon: /img/assets/favicon.ico

# —————————— Option —————————— #
# truncate length of abstracts in index page (the default is 300, there will be no abstruct if you set it to 0)
truncate_length: 
# intro height (the default is 70 percents of the screen, you can input other number)
intro_height: 70
# enable toc
toc: true
# word count and reading time，
reading_info: false
# access statistics
count:
  # enable analytics
  # true or flase
  busuanzi: true
  # baidu code
  baidu: 
# Time
# you can modify the timestamp format.
date_format: YYYY-MM-DD
# display created time.
display_created: true
# display article recent modification time
display_updated: false
# copyright
copyright:
  enable: true
  # https://creativecommons.org/
  license: All articles in this blog are licensed under <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/3.0">CC BY-NC-SA 3.0</a> unless stating additionally.
# currently support directly adding Livere, Disqus, Changyan, fill the field to enable corresponding plugin
comment:
  # Livere  site: https://livere.com/
  livere_uid:
  # Disqus  site: https://disqus.com/
  disqus_shortname: 
  # Changyan  site: http://changyan.kuaizhan.com/
  changyan_appid: 
  changyan_conf:
  # Gitment  site: https://github.com/imsun/gitment/
  gitment_owner:
  gitment_repo:
  gitment_client_id:
  gitment_client_secret:
```

## License
[MIT](https://opensource.org/licenses/MIT/ "MIT")
