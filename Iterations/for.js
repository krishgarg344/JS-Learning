// break and continue

for (let index = 0; index < 10; index++) {
    if (index == 5){
        console.log(`5 detected`);
        continue;
    }
    console.log(`Current Index : ${index}`);
}