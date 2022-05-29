console.log('testing// let array1 = [])
let Object1 = {}
for (i = 0; i < countries_data.length; i++) {
    // console.log(`${countries_data[i].name} : ${countries_data[i].population}`)
    array1.push(`${countries_data[i].name} : ${countries_data[i].population}`)
    // console.log(array1)
}
// console.log(array1)

function sortArray(array, sort, batas) {
    array.sort(function (a, b) {
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;

    })
    return (array.reverse().slice(0, batas))
    // return array.slice(0, batas) // to print only specific mount of array
}

for (i = 0; i < countries_data.length; i++) {
    countries_data[i].jumlahBahasa = countries_data[i].languages.length
}

console.log(sortArray(countries_data, 'population'))
