const venus = Vars.content.planet("venusian-venus");

Events.on(ClientLoadEvent, e => {
    const dialog = new BaseDialog("Warning! W.I.P. Mod!");
    dialog.cont.add("This mod is in [red]W.I.P.[]! Do you [yellow]wish[] to continue?")
    dialog.cont.button("Yes", () => {
        dialog.hide();
    }).row();
    dialog.cont.button("No", () => Core.app.exit()).row();
    dialog.show();
});