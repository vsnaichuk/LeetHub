function twoSum(numbers: number[], target: number): number[] {
    let l = 0, r = numbers.length - 1
    
    while (l < r) {
        const sum = numbers[l] + numbers[r]
        
        if (sum > target) {
            r--
        } else if (sum < target) {
            l++
        } else {
            return [l + 1, r + 1]
        }
    }
    return []
};