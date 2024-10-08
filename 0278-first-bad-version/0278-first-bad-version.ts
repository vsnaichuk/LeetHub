/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let lo = 1, hi = n, res = -1;
        
        while (lo <= hi) {
            const ver = Math.floor(lo + (hi - lo) / 2)
            if (isBadVersion(ver)) {
                hi = ver - 1;
                res = ver
            } else {
                lo = ver + 1
            }
        }
        return res;
    };
};