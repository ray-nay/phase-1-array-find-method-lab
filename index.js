function superbowlWin(records) {
    let year;
    records.find(function (item) {
        if (item.result === "W") {
            //console.log(item.year)
            return year = item.year
        }
        
    })
    return year
    
}
superbowlWin