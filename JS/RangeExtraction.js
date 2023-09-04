const solution = list =>
    list.map((val, idx) => list[idx - 1] === val - 1 && list[idx + 1] === val + 1 ? `~` : val).join(`,`).replace(/,?(~,)+/g, `-`);


// Map through the list 
// if the previous index - && the proceeding index + 1 are both EQUAL to the current value being checked
// then we replace the value with a ~ 
// else we return the value as its not in a range 
// we then join to form a string 
// then replace all tildas