# UC Away: Field Safety Application

#### Required Tools:
* Java 8+
* Maven
* Git
* Nodejs
* Gulp `npm install -g gulp`
* Bower `npm install -g bower`
* Karma `npm install -g karma`
* Protractor `npm install protractor`
* Webdriver `./node_modules/protractor/bin/webdriver-manager update`

# First Time (new project - no style-guide yet): Checkout and run:
* `npm install`
* `bower install`


* `bower install --save https://bitbucket.org/ucd-itservices/style-guide-bower.git#v<set latest version here>`
* `bower install --save lodash`
* `bower install --save bootstrap-sass`


# Otherwise, just updating styleguide  (project already exists with style-guide)
* Check/modify bower.json for latest version (https://bitbucket.org/ucd-itservices/style-guide-bower)

* bower update
* `gulp copy`
* `gulp sass`

* `cp -rp bower_components/style-guide-bower/scripts/controllers/navigation/ src/main/webapp/resources/scripts/controllers/`


