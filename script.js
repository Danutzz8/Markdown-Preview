function updatePreview() {
    
    //document.getElementById('preview').innerHTML = marked(document.getElementById('editor').value);

    // OR

    let previewElement = document.getElementById('preview');
    let editorValue = document.getElementById('editor').value;
    let markedHTML = marked(editorValue);
    previewElement.innerHTML = markedHTML;
}

    function setDefault() {
        let defaultText = `\
# Welcome to my Markdown Previewer
## a markdown previewer
[Check out my other projects](https://github.com/Danutzz8).
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`
function exampleOf() {
  return multiLineCodeBlock;
}
\`\`\`

- This
- is
- an
- example
- of
- list
- items

> This is an example of block quote

![Danutzz](https://i.pinimg.com/564x/9a/55/81/9a5581b10592547f5ffef6f22e2b7158.jpg)

**This is an example of Bolded Text**`;

        
        
        let editorField = document.getElementById('editor');
        let previewElement = document.getElementById('preview');
        editorField.value = defaultText;
        previewElement.innerHTML = marked(defaultText);

        marked.setOptions({
  breaks: true
});

}