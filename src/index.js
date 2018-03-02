module.exports =function check(str, bracketsConfig) {
    let arr = str.split('');
    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (bracketsConfig[i][0] == arr[j] && arr[j + 1] == bracketsConfig[i][1]) {
                arr.splice(j, 2);
                i = 0;
                j = -1;
            }
        }
    }
    if (arr.length != 0)
        return false;
    else
        return true;
};
