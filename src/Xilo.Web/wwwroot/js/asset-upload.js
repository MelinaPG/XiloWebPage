(function initUpload() {
    var card = document.getElementById('uploadCard');
    if (!card) { setTimeout(initUpload, 50); return; }
    var siteId = card.getAttribute('data-site-id');
    card.innerHTML =
        '<form method="post" action="/api/assets/upload" enctype="multipart/form-data">' +
        '<input type="hidden" name="siteId" value="' + siteId + '" />' +
        '<label class="cl-dropzone" id="dropLabel" style="cursor:pointer;">' +
        '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
        '<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>' +
        '<path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>' +
        '<span id="fileLabel">Click to choose files</span>' +
        '<span class="cl-dropzone__formats">PDF, PNG, JPG, AI, ZIP — Up to 10 MB each</span>' +
        '<input type="file" name="files" id="assetFileInput" style="display:none" multiple accept=".pdf,.png,.jpg,.jpeg,.ai,.zip,.svg,.webp" />' +
        '</label>' +
        '<button type="submit" class="cl-btn cl-btn--primary" style="width:100%;margin-top:1rem;">Upload Assets</button>' +
        '</form>';
    var fi = document.getElementById('assetFileInput');
    var lbl = document.getElementById('dropLabel');
    if (lbl && fi) {
        lbl.addEventListener('click', function (e) { if (e.target !== fi) fi.click(); });
        fi.addEventListener('change', function () {
            var count = this.files.length;
            document.getElementById('fileLabel').textContent =
                count === 0 ? 'Click to choose files' :
                count === 1 ? this.files[0].name :
                count + ' files selected';
        });
    }
})();
