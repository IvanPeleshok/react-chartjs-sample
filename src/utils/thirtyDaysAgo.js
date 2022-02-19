export function thirtyDaysAgo() {
    return new Date((new Date().getTime() - 60*60*24*29*1000));
}