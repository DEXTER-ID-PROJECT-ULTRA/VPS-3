var commands = [];

function eypz(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = true;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = true;
    if (!info.category) data.category = 'misc';
    if(!info.filename) data.filename = "Not Provided";
    commands.push(data);
    return data;
}
module.exports = {
    eypz,
    AddCommand:eypz,
    Function:eypz,
    Module:eypz,
    commands,
};
