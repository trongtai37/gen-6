/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    let result = []
    let hashtable1 = {}
    let hashtable2 = {}
    for (let i = 0; i < arr1.length; i++) {
        if (!hashtable1[arr1[i]]) {
            hashtable1[arr1[i]] = 1
        }
        else {
            hashtable1[arr1[i]] += 1
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        hashtable2[arr2[i]] += 1
    }
    for (let i = 0; i < arr2.length; i++) {
        while (hashtable1[arr2[i]] > 0) {
            result.push(arr2[i])
            hashtable1[arr2[i]] -= 1
        }
        
    }
    for (let number of Object.keys(hashtable1)){
        if (hashtable1[number] > 0) {
            while (hashtable1[number] > 0) {
                result.push(number)
                hashtable1[number] -= 1
            }
            
        }
    }
    return result
};