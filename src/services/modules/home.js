import myRequest from "..";

export function getHomeGooodPriceDate() {
    return myRequest.get({
        url: "/home/goodprice"
    })
}