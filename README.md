<div align="center">
    <a href="https://github.com/Microsoft/vscode">
        <img src="https://raw.githubusercontent.com/dunstontc/dark-plus-syntax/master/assets/128.png" alt="logo">
    </a>
</div>

Fork and complete recoloring to suit my liking of dark-plus-syntax

## Languages with customized support
- C# 10
- C
- Go
- html
- CSS
- json
- markdown

## Resources & References

- [dark-plus-syntax](https://github.com/dunstontc/dark-plus-syntax)

## Contributing

The code is split up by language into individual JavaScript files, which live in `src/partials`.
So if you wanted to see the Ruby colors, for example, those are in `src/partials/ruby.js`.
Those files are imported, merged, and written out to `themes/dark-theme.json`

### To make changes

1. Clone the project
2. Change a file in `src/partials`
2. Run `npm install` to install development dependencies.
3. Run `npm run watch` to build the theme file with the new changes.
4. Go to  the *Debug* dropdown and click *Start Debugging* to run the new version of the theme locally.
