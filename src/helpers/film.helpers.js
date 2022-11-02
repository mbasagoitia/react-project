import React from "react";

export function getListOf (list, prop) {
    const result = [];
    for (let obj of list) {
        if (!result.includes(obj[prop])) {
            result.push(obj[prop]);
        }
    }
    return result;
}

export function filterFilmsByDirector (list, director) {
    if (director === "all") {
        return list;
    } else {
        return list.filter((item) => item.director === director);
    }
}

export function getFilmStats (list) {
    let listLength = list.length;
    let totalScore = list.reduce((acc, item) => {
        return acc += parseInt(item.rt_score)
    }, 0);
    let averageScore = totalScore/listLength;
    
    let dates = [];
    for (let item of list) {
        dates.push(parseInt(item.release_date));
    }
    let latestDate = Math.max(...dates);

    return {
        avg_score: averageScore,
        acc_score: totalScore,
        total: listLength,
        latest: latestDate
    }
}
