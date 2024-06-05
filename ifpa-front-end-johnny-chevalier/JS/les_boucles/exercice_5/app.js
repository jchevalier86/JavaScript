// Résultat attendu dans la console :
//7 x 1 = 7
//7 x 2 = 14
//...
//7 x 10 = 70

const table = 7;

for (i = 1; i <= 10; i++) {
    const result = table * i;
    console.log(table + " x " + i + " = " + result);
    // Ou alors
    // console.log(`${table} x ${i} = ${table * i}`);
}