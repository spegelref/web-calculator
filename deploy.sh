#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist
echo > .nojekyll

if [ -d .git ]; then
    echo "Deleting old git repo."
    rm -fR .git
fi

git init
git checkout -b master
git add -A
git commit -m 'deploy'

git push -f git@github.com:spegelref/web-calculator.git master:gh-pages

cd -
