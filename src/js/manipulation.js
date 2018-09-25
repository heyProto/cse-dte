function getCardStatus(status, defaultValue = '') {
    if(status) {
        if (status.toLowerCase().match(/dismissed/g))
            status = "Cancelled";
        else if (status.toLowerCase().match(/disposed|judgement/g))
            status = "Done";
        else if (status.match(/\d{2}\/\d{2}\/\d{4}/g))
            status = "Ongoing";
        else status = defaultValue;
    } else {
        status = defaultValue;
    }   

    return status;
}

module.exports = {
    getCardStatus: getCardStatus
}

