//example of a conditional or control flow
/*if statements can have any number or else if s, but
only one else
*/
age = 24;

if(age > 18){
    console.log('You are permitted.');
}else if (age < 18){
    console.log('You are not allowed.');
}
else{
    console.log('This is impossible.');
}

//ternary operator
// condition ? command(if trend) : command2(if false, or default);
age >= 18 ? console.log('You are permitted') : console.log('You are not allowed.');

//switch statement
switch(age){
    case age >=18:
        //command block
        console.log('You are permitted.');
        break;
        case age < 18:
            console.log('You are not allowed.');
            break;
            default:
                console.log('This is impossible.');



}
