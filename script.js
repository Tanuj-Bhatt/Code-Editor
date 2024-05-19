document.getElementById('run-button').addEventListener('click', function() {
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('output');
    
    output.srcdoc = code;
});
