import React from "react";

export function filterFilmsByDirector (list, director) {
    if (director === "all") {
        return list;
    } else {
        return list.filter((item) => item.director == director);
    }
}

export function getListOf (list, prop) {
    const result = [];
    for (let obj of list) {
        if (!result.includes(obj[prop])) {
            result.push(obj[prop]);
        }
    }
    return result;
}