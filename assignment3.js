let str="hello i am Rajesh Goura am";


//here i have made the function to convert the string to uppercase
function convertToUpperCase(str){
    let s1= str.toUpperCase();
    return s1;
}

//here i have made the function to convert the string to lowercase
function convertToLowerCase(str){
    let s2=str.toLowerCase();
    return s2;
}

//here i have made the function to find the length of the string
function findLength(str){
    return str.length;
}


//here i have made the function to replace string
function rep(str,a,b){
    return str.replace(a,b);
}


//here i have made the function to find the occurence of a particular word in a string
function ocuurence(str,a){
    let s1=str.split(" ");
    let count=0;
    for(let i=0;i<s1.length;i++){
        if(s1[i]==a){
            count++;
        }
    }
    return count;
}


//here i have made a function to reverse the string
function reverse(str){
    let txt="";
    let right=str.length-1;
    let left=0;
    while(left<=right){
        txt+=str.charAt(right);
        right--;
    }
    return txt;
}

//here i  have made the function to reverse the strings according to words
function reverseWords(str){
    let s1=str.split(" ");
    let txt="";
    let right=s1.length-1;
    let left=0;
    while(left<=right){
        txt+=s1[right]+" ";
        right--;
    }
    return txt;

}

console.log(convertToUpperCase(str));
console.log(convertToLowerCase(str));
console.log(findLength(str));
console.log(rep(str,"Goura","Cage"));
console.log(reverse(str));
console.log(reverseWords(str));
console.log(ocuurence(str,"am"));