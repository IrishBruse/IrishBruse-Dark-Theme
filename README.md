<div align="center">
    <img src="https://raw.githubusercontent.com/IrishBruse/IrishBruse-Dark-Theme/master/assets/128.png" alt="logo">
</div>

# Screenshots

### CSharp
<img src="https://raw.githubusercontent.com/IrishBruse/IrishBruse-Dark-Theme/master/assets/Langs/cs.png" alt="logo">

### Markdown
<img src="https://raw.githubusercontent.com/IrishBruse/IrishBruse-Dark-Theme/master/assets/Langs/md.png" alt="logo">

### Go
<img src="https://raw.githubusercontent.com/IrishBruse/IrishBruse-Dark-Theme/master/assets/Langs/go.png" alt="logo">

---

My Custom Theme i use in vscode with colors from the dark theme in  
vscode and dark-plus-syntax but with more colors to better explain  
the type of syntax it is

## Languages with customized support
- C#
- Go
- Markdown
- Json
- JavaScript/TypeScript
- C
- CSS
- HTML/XML
- Java

## Resources & References

- [dark-plus-syntax](https://github.com/dunstontc/dark-plus-syntax)
- Built in vscode dark theme

## Contributing

The code is split up by language into individual JavaScript files, which live in `src/partials`.
So if you wanted to see the Ruby colors, for example, those are in `src/partials/java.js`.
Those files are imported, merged, and written out to `themes/dark-theme.json`

### To make changes

1. Clone the project
2. Change a file in `src/tokenColors`
2. Run `npm install` to install development dependencies.
3. Run `npm run watch` to build the theme file with the new changes.
4. Go to  the *Debug* dropdown and click *Start Debugging* to run the new version of the theme locally.
