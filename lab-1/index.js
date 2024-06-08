function unquoteString(input) {
    const [start, end] = [input.indexOf('«'), input.indexOf('»')];
    return end > start ? input.slice(start + 1, end) : input;
}