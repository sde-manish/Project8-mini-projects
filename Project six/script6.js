const insert = document.querySelector('.insert');

window.addEventListener('keydown', function(e){
    insert.innerHTML =` <div class="keyvalues">
        <table style="display: flex; justify-content: center; align-items: center; font-size: 25px; margin:20px; padding:10px">
            <tr style="padding:10px">
                <th>Key</th><th>Key code</th><th>Code</th>
            </tr>
            <tr>
                <td>${e.key == ' ' ? 'Space' : e.key}</td><td>${e.keyCode}</td><td>${e.code}</td>
            </tr>
        </table>
        </div>`
})