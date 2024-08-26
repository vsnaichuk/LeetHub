function findTheDifference(s: string, t: string): string {
    const map = new Map();
    
    for(let i=0;i<s.length;i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
 
    for(let i=0;i<t.length;i++) {
        if(map.has(t[i])){
             map.set(t[i], map.get(t[i])-1);

             if(map.get(t[i])==0) 
                 map.delete(t[i]);
        } else {
            return t[i]
        }
    }
};