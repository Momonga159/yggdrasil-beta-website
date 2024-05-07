document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('downloadButton');

    downloadButton.addEventListener('click', function(event) {
        event.preventDefault();

        var url = "https://www.dropbox.com/scl/fi/b8fczd5nsaab60q4u5jwc/yggdrasil-wiki.png?rlkey=4mhn1va0ljpovaxl7iayal0we&st=tzxhr7gm&dl=1";
        var fileName = url.substring(url.lastIndexOf('/') + 1);

        var element = document.createElement('a');
        element.style.display = 'none';
        element.setAttribute('href', url);
        element.setAttribute('download', fileName);
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    });
});



