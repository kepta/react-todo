> to view a markdown file in atom press `ctrl-shift-m`

## Prerequisite
Make sure
- you know git, specially forking and creating PRs.
- you have npm and nvm installed and working.
- google is your best resource.
- you have atom.
- know es6
- know npm and how to install npm packages globally aswell as locally
- know how to create an issue on github

## Usage

- fork this repo
- Install jspm `npm install -g jspm`
- Install gulp `npm install -g gulp`
- `npm install`
- `jspm install`
- Gulp tasks:
    - `gulp` or `gulp serve` To run the application on port 3500, watchin changes on js files (compiling jsx) and sass files (compile, autoprefix and produce sourcemaps).
    - `gulp test` Shortcut to run karma, it of course can be run directly without gulp
    - `gulp build` Same as `gulp` except it doesn't run a server
    - `gulp dist` Make a distribution copy: Bundle the application in one JS file and minify it with Uglify, compile sass files and minify them, put everything in the dist folder.

- Incase you are not familiar with test, build, dist google them up
- One you are done with the todo app, send a PR to the repository you forked from.

Everything is in the src folder Have a look to see how everything is wired.

## Help

- Any doubt/help please open a new issue ticket in the main Github repository.


## License

The MIT License (MIT)

Copyright (c) 2015

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
