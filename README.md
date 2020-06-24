# stejs-loader

This is a Webpack loader for [stejs](https://github.com/ItsaMeTuni/stejs). It was intended to be used with HtmlWebpackPlugin, like this:

webpack.config.js
```
plugins: [
    new HtmlWebpackPlugin({
        template: `!!html-loader!stejs-loader?data=./src/pages/article1.js!${__dirname}/src/views/article.html`,
        filename: `project/article1.html`,
    }),
]
```

src/pages/article1.js
```
module.exports = { title: 'Article 1', content: 'blah blah blah' };
```

src/views/article.html
```
<html>
    <body>
        <h1>$title$</h1>
        <p>$content$</p>
    </body>
</html>
```

## How it works

Notice we added a `data` query parameter to stejs-loader in the `HtmlWebpackPlugin` template field. This `data` query parameter is a path to a file (in this case `src/pages/article1.js`) that exports an object containing a few fields. The values of these fields are then applied to `/src/views/article.html` where the `$title$` and `$content$` tags are. Then `html-loader` does its job, finally handing the file to `HtmlWebpackPlugin` which will generate the page and all that good stuff.