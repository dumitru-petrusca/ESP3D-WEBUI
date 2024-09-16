function opentab(evt, tabname, tabcontentid, tablinkid) {
    let tabcontent = classes("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].parentNode.id == tabcontentid) {
            tabcontent[i].dispatchEvent(new Event("deactivate"));
            tabcontent[i].style.display = "none";
        }
    }

    let tablinks = classes("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        if (tablinks[i].parentNode.id == tablinkid) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }
    }

    id(tabname).dispatchEvent(new Event("activate"));
    displayBlock(tabname);
    evt.currentTarget.className += " active";
}
