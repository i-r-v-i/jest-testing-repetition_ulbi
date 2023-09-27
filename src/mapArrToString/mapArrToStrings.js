const mapArrToStrings = (arr) => {
    return arr.filter((item) => Number.isFinite(item)).map(String);
    
}

module.exports = mapArrToStrings;