//Sayıların Karelerini Hesaplama
function kareAlma() {
    const array = [1,2,3,4,5,6,7,8,9,10];
    console.log(array);
    
    const newArray = array.map(num => num * num);
    console.log(newArray);
    
    return newArray;
}
kareAlma();
