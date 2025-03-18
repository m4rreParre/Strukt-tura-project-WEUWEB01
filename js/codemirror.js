const editors = {};

function initializeEditor(editorIdHtml, editorIdCss, previewId, tabPrefix) {
    var htmlEditor = CodeMirror.fromTextArea(document.getElementById(editorIdHtml), {
        mode: "htmlmixed",
        lineNumbers: true,
        theme: "dracula"
    });

    var cssEditor = CodeMirror.fromTextArea(document.getElementById(editorIdCss), {
        mode: "css",
        lineNumbers: true,
        theme: "dracula"
    });

    htmlEditor.on("change", () => updatePreview());
    cssEditor.on("change", () => updatePreview());

    function instanceShowTab(tab) {
        if (tab === 'html') {
            document.getElementById(editorIdHtml + "Container").style.display = "block";
            document.getElementById(editorIdCss + "Container").style.display = "none";
        } else if (tab === 'css') {
            document.getElementById(editorIdHtml + "Container").style.display = "none";
            document.getElementById(editorIdCss + "Container").style.display = "block";
        }
        const container = document.getElementById(tabPrefix);
        container.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
        container.querySelector(`[data-tab="${tab}"]`).classList.add("active");

        setTimeout(() => {
            htmlEditor.refresh();
            cssEditor.refresh();
        }, 50);
    }

    function updatePreview() {
        var htmlCode = htmlEditor.getValue();
        var cssCode = "<style>" + cssEditor.getValue() + "</style>";
        var iframe = document.getElementById(previewId);
        iframe.contentDocument.open();
        iframe.contentDocument.write(htmlCode + cssCode);
        iframe.contentDocument.close();
    }

    editors[tabPrefix] = { showTab: instanceShowTab };

    // Visa HTML som standard och uppdatera preview
    instanceShowTab('html');
    updatePreview();
}

initializeEditor("htmlEditor1", "cssEditor1", "preview1", "tabs1");
initializeEditor("htmlEditor2", "cssEditor2", "preview2", "tabs2");
