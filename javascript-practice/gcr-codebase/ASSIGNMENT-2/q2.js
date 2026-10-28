
 // Q2: String Manipulation Report

const productName = " wireless headphones PRO ";

const cleanedName = productName.trim().toLowerCase();

const capitalizedName = cleanedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const finalTitle = capitalizedName.replace("Pro", "Pro Edition");

console.log("Product Title Report");
console.log(`Original: "${productName}"`);
console.log(`Cleaned Title: ${finalTitle}`);
console.log(`Title Length: ${finalTitle.length}`);
