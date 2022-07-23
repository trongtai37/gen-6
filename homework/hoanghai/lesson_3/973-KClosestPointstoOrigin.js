/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 function cal(toado) {
    let [x,y] = toado
    return x*x + y*y
}
var kClosest = function(points, k) {
    for (let i = 0; i < points.length; i++){
        let distance = cal(points[i])
        points[i].push(distance)
    }
    let sortedPoints= points.sort(function (a,b){
        return a[2] - b[2]
    })
    let closest = []
    for (let i = 0; i <k; i++) {
        let [x,y,dis] = sortedPoints[i]
        closest.push([x,y])
    }
    return closest
};