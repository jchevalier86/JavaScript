function sontAnagrammes (mot1, mot2) {
    return mot1.split('').sort().join('') === mot2.split('').sort().join('');
}
console.log(sontAnagrammes("chien", "niche"));