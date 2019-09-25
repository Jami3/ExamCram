var java1V1 = [
{
  Question: "Since Java is platform dependent, you must have a specific computer that can run your source code. True or false?",
  type: "True/False",
  tags: ["Theory"],
  answer: "False"
},
{
  Question: "A block of statements is contained between two curly brackets { }. True or false?",
  type: "True/False",
  tags: ["Theory"],
  answer: "True"
},
{
  Question: "Whenever you’re declaring a field variable/instance variable, it should be located after method declarations. True or false?",
  type: "True/False",
  tags: ["Theory", "Variables"],
  answer: "False"
},
{
  Question: "If there are multiple parameters/arguments in a method declaration, it should be separated by a semicolon. True or false?",
  type: "True/False",
  tags: ["Theory", "Methods"],
  answer: "False"
},
{
  Question: "The first letter of a class name should be a uppercase letter. The first letter of a variable name should be a lowercase letter. True or false?",
  type: "True/False",
  tags: ["Theory", "Classes", "Coding Conventions"],
  answer: "True"
},
{
  Question: "The following code will compile. True or false?",
  questionImg: "maybe.jpg",
  type: "True/False",
  tags: ["Compiler"],
  answer: "True"
},
{
	Question: "When the Java source code is compiled, it produces",
	type: "mcq",
	options: ["Machine Code","Bytecode","Source Code","Assembly Code"],
	tags: ["Compiler", "Theory"],
	answer: "Bytecode"
},
{
	Question: "Which of the following is a correct method header for the main method",
	type: "mcq",
	options: ["public static void main(String args)","public static void main(strings[] args)","public static void main(String[] args)","Public void static main(String[] args)"],
	tags: ["Methods"],
	answer: "public static void main(String[] args)"
},
{
  Question: "Examine the following code segment, then answer the questions below:",
  questionImg: "switchExample.jpg",
  type: "superMCQ",
  options: ["What's the output?", "What's the output if char c = 'b'?", "What's the output if char c = 'c'?", "What's the output if char c = 'd'?"],
  tags: ["Switch Statements", "Output"],
  answer:["1&4", "2&4", "3&4", "&4"]
},
{"options":[".java & .class",".class & .java",".j & .c",".c & .j"],"type":"mcq","Question":"The extension name of a Java bytecode file is ______ and the extension name of a Java source code file is ______.","answer":".class & .java","tags":["Theory"]},
{"options":["double","float","int","char"],"type":"mcq","Question":"What is the best data type for the value: 9.66?","answer":"float","tags":["Variables", "Theory"]},
{
  Question: "How many bits of memory does each data type use?",
  type: "superMCQ",
  options: ["short", "byte", "double", "char"],
  tags: ["Variables", "Theory"],
  answer:["16", "8", "64", "16"]
},
{"options":["float","int"," String","char"],"type":"mcq","Question":"Which of the following is not a primitive type in Java?","answer":"String","tags":["Strings", "Variables", "Theory"]},
{"options":["null","Scanner","true","static"],"type":"mcq","Question":"Which of the following is not Java keyword?","answer":"Scanner","tags":["Theory", "Keywords"]},
{"options":["Just Interpret That","Java Interpretation Technology","Just In Time","Java Information Theory"],"type":"mcq","Question":"What does JIT stand for?","answer":"Just In Time","tags":["Theory"]},
{"options":["Doers & Lookers","Accessors & Mutators","Changers & Returners","Helpers & Modifiers"],"type":"mcq","Question":"Which of the following is another name for the set and get methods for private fields in a class?","answer":"Accessors & Mutators","tags":["Theory", "Methods", "Setters and Getters"]},

{
  Question: "Look at the following Java local variable declarations. Check the ones that will give a compile arror.",
  type: "checkboxQ",
  options: ["char 579word;", "bool decision = false;", "byte _count;", "int g_number4;", "float NUMBER = 4.5F;" ],
  answer: ["checked", "checked", "unchecked", "unchecked", "unchecked"],
  tags: ["Variables", "Errors", "Compiler"]
},
{"options":["The cast operator","The . (dot) operator","The = (assignment) operator","None of the above"],"type":"mcq","Question":"What Java operator is used to access variables and methods that belong to an object?","answer":"The . (dot) operator","tags":["Objects", "Methods", "Theory"]},
{"options":["\" \"","nothing"," null","0"],"type":"mcq","Question":"What is the default value for a String variable?","answer":"null","tags":["Strings", "Variables", "Theory"]},
{"options":["8","3","5","2"],"type":"mcq","Question":"What is the result of 8%3?","answer":"2","tags":["Arithmetic Operators"]},
{"options":["8","3","0","2"],"type":"mcq","Question":"What is the result of 3%5?","answer":"3","tags":["Arithmetic Operators"]},
{"type":"True/False","Question":"The eight primitive data types in Java are int, long, byte, short, double, float, char, and boolean","answer":"True","tags":["Variables", "Theory"]},
{"options":["CPU","Hard Drive","RAM (Memory)","JDK"],"type":"mcq","Question":"Just before running a program, it is loaded into the computer’s what?","answer":"RAM (Memory)","tags":["Theory"]},
{"options":["Maximum 5 at a time","Maximum 1 at a time","Infinite","As many as you want until the computer's memory is full"],"type":"mcq","Question":"How many objects can you make from a single Java class?","answer":"As many as you want until the computer's memory is full","tags":["Objects","Theory", "Classes"]},
{"options":["Whenever you make a new source file in Java","Whenever you make a variable","Using the new keyword","Using the . (dot) operator"],"type":"mcq","Question":"How do you create objects in Java?","answer":"Using the new keyword","tags":["Objects","Theory"]},

{"options":["The code will not compile because there is a run-time error","The code will compile but will have logic errors","The code will compile with no errors","The code will not compile because there is a syntax error"],"type":"mcq","Question":"Will the following code compile? ","answer":"The code will not compile because there is a syntax error","tags":["Compiler"],"questionImg":"syntaxError.jpg"},
{"options":["Number","Class","Object","Literal"],"type":"mcq","Question":"In Java, the keyword false is a:","answer":"Literal","tags":["Theory","Keywords"]},
{"options":["They're usually declared outside of the class on the top","It’s common to use public or private when it’s declared","They’re lost when a method finishes","They’re “seen” by all parts of the code"],"type":"mcq","Question":"Which of the following is true about local variables?","answer":"They’re lost when a method finishes","tags":["Theory","Variables"]},

{
  Question: "Enter the number of bits of each of the following data type:",
  type: "superMCQ",
  options: ["long", "float", "byte", "int"],
  tags: ["Variables", "Theory"],
  answer:["64", "32", "8", "32"]
},

{
  Question: "How would you declare a variable of type int with the value of 48 and the name num1?",
  type: "mcq",
  options: ["int = 48", "num1 = 48", "int num1 += 48", "int num1 = 48"],
  tags: ["Variables"],
  answer: "int num1 = 48"
},

{
  Question: "A student wants to create an object variable of a class. What is the correct format?",
  type: "mcq",
  options: ["BigDog husky = new Husky();", "BigDog() husky = new BigDog();", "BigDog = new BigDog(husky);", "BigDog husky = new BigDog();"],
  tags: ["Variables","Objects"],
  answer: "BigDog husky = new BigDog();"
},

{
  Question: "In a Java class, there is method called “doSomething.” No other methods in the class (or any other class) calls this method.",
  type: "mcq",
  options: ["The method will run once","The method will run, even if it’s not called", "The method will never run","The method will produce a syntax error because it’s not called"],
  tags: ["Methods", "Theory"],
  answer: "The method will never run"
},
{
  Question: "Complete the following code by writing a condition in the blank space:",
  questionImg: "Condition1.jpg",
  type: "superMCQ",
  options: [" "],
  tags: ["Conditions"],
  answer: ["age >= 13 && age <= 19"]
},
{
  Question: "Look at the following method declaration",
  questionImg: "pushMethod.jpg",
  type: "superMCQ",
  options: ["What is the access level of the method?","What is the name of this method?","What is the return type of this method?","What are the data types of the parameters?"],
  tags: ["Methods", "Theory"],
  answer: ["class","push","void","int and char"]
},
{"options":[""],"type":"blank","Question":"Before we can run a program, we must ________________ our source code.","answer":"compile","tags":["Compiler","Theory"]},
{"options":[""],"type":"blank","Question":"The Java bytecode (.class) files are executed by the ___________ ","answer":"Java Virtual Machine","tags":["Compiler","Theory"]},
{"options":[""],"type":"blank","Question":"int, double, and boolean are examples of ___________________ data types.","answer":"primitive","tags":["Variables", "Theory"]},
{"options":[""],"type":"blank","Question":"The following code is an example of variable _______________________. \ndouble number;","answer":"declaration","tags":["Variables", "Theory"]},
{
  Question: "The following code is an example of variable ______________________ and _____________________. \ndouble number = 10.0;",
  type: "superMCQ",
  options:["",""],
  tags: ["Variables", "Theory"],
  answer: ["declarion", "initialization"]
},
{"options":[""],"type":"blank","Question":"The + signs in the following code are used to perform String _________________________ \nSystem.out.println(\"There are\" + 10 +\" lights.\");","answer":"concatenation","tags":["Strings", "Theory"]},
{"options":[""],"type":"blank","Question":"The _____________________ translates source code to byte code one line at a time.","answer":"compiler","tags":["Compiler","Theory"]},
{"options":[""],"type":"blank","Question":"Default value for an int field variable is ____________","answer":"0","tags":["Variables", "Theory"]},
{
  Question:"A single Java statement ends with a ________. A block of statements starts with _______ and ends with _______.",
  type: "superMCQ",
  options:["","",""],
  tags: ["Variables", "Theory"],
  answer: [";", "{","}"]
},
{"options":[""],"type":"blank","Question":"The line package prog10082; is at the top of the Java source file. This means the source file is saved inside a folder called ________________.","answer":"prog10082","tags":["Theory"]},
{"options":[""],"type":"blank","Question":"Objects are created from ____________  during run-time.","answer":"classes","tags":["Theory"]},
{"options":[""],"type":"blank","Question":"assume we have a class called 'Rectangle'. Create an object of that class with a variable named 'wide'","answer":"Rectangle wide = new Rectangle();","tags":["Theory","Variables","Objects"]},
{"options":[""],"type":"blank","Question":"What does the acronym \"JRE\" stand for? ______________________________","answer":"Java Runtime Environment","tags":["Compiler","Theory"]},
{"options":["'A'","false","-1000","2.99F","2.99"],"type":"superMCQ","Question":"List the best Java data type for each value/literal","answer":["char","boolean","int","float","double"],"tags":["Variables"]},
{"options":[""],"type":"blank","Question":"There is a Java class named Temporary. What is the filename (including the extension name) when you save this class? _________________________________","answer":"Temporary.java","tags":["Theory","Classes"]},
{"options":[""],"type":"blank","Question":"We make an object out of the class named ________________ when we want to read input from the user through the keyboard.","answer":"Scanner","tags":["Classes","Theory"]},
{"options":[""],"type":"blank","Question":"Give one difference between a method declaration and a field variable declaration","answer":"Return type - Methods have a return type, variables don't have a return type","tags":["Theory","Method"]},
{"options":[""],"type":"blank","Question":"Why is it wrong to name a variable 'i' or 'b' according to coding standards?","answer":"Because a single letter variable name is not descriptive","tags":["Theory","Variable"]},
{"options":[""],"type":"blank","Question":"Write the condition of an if statement that checks if two String variables, str1 and str2 hold different values","answer":"!str1.equals(str2)","tags":["Conditions"]},
{"options":[""],"type":"shortA","Question":"What is the purpose of Type casting in Java?","answer":"To convert a variable or an Object of one type to another type","tags":["Theory"]},
{"options":[""],"type":"shortA","Question":"What is the difference between static and non-static methods?","answer":"\nFor a non-static method, you need to instantiate an object of the class which the method belongs to. \nFor a static method, instantiation is not needed, the method can be called using the class name","tags":["Theory"]},
{"options":[""],"type":"shortA","Question":"What is the difference between static and non-static field variables? ","answer":"\nStatic variables belong to a class. \nNon-static variables belong to an object of a class","tags":["Variables"]},
{"options":[""],"type":"shortA","Question":"What is the difference between public and private field variables? ","answer":"\nPrivate field variables are only accessible with their own class. \nPublic field variables are accessible from all classes.","tags":["Variables"]},
{"options":[""],"type":"shortA","Question":"Whats does the += operator do? ","answer":"\nFor numerals, it will increment the value of the variable by the given value. \nFor String literals it will concatenate the given value with the current value attached the String variable","tags":["Variables"]},
{"options":[""],"type":"shortA","Question":"What does the final keyword mean in Java when used with variables?","answer":"It makes a variable a constant","tags":["Variables","Keywords"]},
{"options":[""],"type":"shortA","Question":"Explain in a few sentences why third-generation programming languages are much better when compared to first-generation programming languages. Give two examples of third-generation languages. ","answer":"\nThird-generation programming languages are not written in machine code (0s and 1s), making it easier and efficient to make programs. \nThey are also machine independent unlike 1st Gen programming languages which are often adapted to a specific machine.  \nC and Java are third-generation languages.","tags":["Theory"]},
{"options":[""],"type":"shortA","Question":"What does the following code do? \n Scanner input = new Scanner(System.in);","answer":"Instantiate an object of the Scanner class that can be used to read input from the user through the keyboard","tags":["Scanner","Objects"]},
{"options":[""],"type":"shortA","Question":"What does the * symbol mean when used in the import statement? ","answer":" It will import all classes from a specific package. The * symbol is called wildcard","tags":["Scanner","Objects"],"answerImg":"wildcard.jpg"},
{"options":[""],"type":"shortA","Question":"What is the difference between a class and an object?","answer":"A class contains all the data and functionality; it's the template use to create objects. An object is an instance of a class.","tags":["Objects","Classes"]},
{"options":[""],"type":"shortA","Question":"What is the difference between == and .equals() when comparing two things?","answer":"\n== is an operator used to check equality of values for primitive types or reference of objects  \ne.g. num1 == num2 checks if the value of num1 is the same as num2 & str1 == str2 checks if the reference if str1 is the same as that of str2 .equals() is a method uses compare the values in objects  \ne.g. str1.equals(str2) checks if the value of str1 is the same as the value of str2","tags":["Objects","Arithmetic Operators","Conditions"]},
{"options":[""],"type":"shortA","Question":"Find the errors.  \nfor ( i = 0, i < 100, i++) { \n\t\tSystem.out.println(\"Welcome to Java!\"); \n\t}","answer":"the variable i is not declared and the commas should be semicolons","tags":["Variables","Theory"]},
{"options":[""],"type":"shortA","Question":"Briefly explain the difference between these two Java literals: \n'Z' \n\"Z\"","answer":"'z' is a char and \"z\" is a string","tags":["Variables","Strings"]},
{"options":[""],"type":"shortA","Question":"Fix the following code. Only make changes to code that will not compile.","answer":"int myVar shouldn't be declared twice","tags":["Variables"],"questionImg":"hello.jpg","answerImg":"hello1.jpg"},
{"options":[""],"type":"shortA","Question":"Write a static method called closestToZero which has two parameters, both of type double. The method will return whichever parameter is closest to zero. For instance, if the method is called with the values 7.2 and -5.5, it should return -5.5, because -5.5 is closest to zero.","answer":"","tags":["Methods"],"answerImg":"zero.jpg"},
{"options":[""],"type":"blank","Question":"What is the output of the following program? ________________?","answer":"109876","tags":["Loops"],"questionImg":"1.jpg"},
{"options":[""],"type":"blank","Question":"What is the return type of this method? ___________________ \n        \tpublic static double calcStuff(int x, float y)","answer":"double","tags":["Methods"]},
{"options":[""],"type":"blank","Question":"Given this declaration below, what is the value of  myArray[2]? ____________\n  \tint[] myArray = new int[]{3,6,2,1,8,6,9,4};","answer":"2","tags":["Arrays"]},
{"options":[""],"type":"blank","Question":"What does this method return? ___________ \n        \tpublic static int doStuff(){\n       \ttry{\n            \treturn 1;\n       \t}\n       \tfinally{\n            \treturn 0;       \n\t}","answer":"0","tags":["Methods"]},
{"options":[""],"type":"blank","Question":"What does the following code print? __________________","answer":"True","tags":["Methods"],"questionImg":"2.jpg"},
{"options":[""],"type":"blank","Question":"What does the following code print? __________________","answer":"2","tags":["Methods"],"questionImg":"3.jpg"},
{"tags":["Methods", "Arithmetic Operator"],"Question":"What is the output of the following block of code?","type":"blank","questionImg":"4.jpg","answer":"1"},
{"tags":["Casting"],"Question":"What is the output of the following block of code?","type":"shortA","questionImg":"5.jpg","answer":"72.9\n72num72.9"},
{"tags":["Conditions"],"Question":"What is the output of the following block of code?","type":"blank","questionImg":"6.jpg","answer":"true"},
{"tags":["Conditions", "Strings"],"Question":"What is the output of the following block of code?","type":"shortA","questionImg":"7.jpg","answer":"false\ntrue"},
{"tags":["Arithmetic Operator"],"Question":"What is the output of the following block of code?","type":"blank","questionImg":"8.jpg","answer":"i is 11 and result is 100"},
{"tags":["Arithmetic Operator"],"Question":"What is the output of the following block of code?","type":"blank","questionImg":"9.jpg","answer":"i is 11 and newNum is 110"},
{"tags":["String"],"Question":"What is the output of the following block of code?","type":"blank","questionImg":"10.jpg","answer":"Amount is $452.32"},
{"tags":["Arithmetic Operator"],"Question":"int answer = 13 % 5; \n What is the value of answer?","type":"blank","answer":"3"},
{"tags":["Arithmetic Operator"],"Question":"What is the output of the following block of code?","type":"blank","questionImg":"11.jpg","answer":"2"},
{"tags":["Arithmetic Operator"],"Question":"What is the output of the following block of code?","type":"blank","questionImg":"12.jpg","answer":"2"},
{"tags":["Arithmetic Operator"],"Question":"What is the output of the following block of code?","type":"shortA","questionImg":"13.jpg","answer":"i mod 10 = 0\nd mod 10 = 2.0"},
{"tags":["Arithmetic Operator"],"Question":"What is the output of the following block of code?","type":"shortA","questionImg":"14.jpg","answer":"START1234567890\nSTARTJelly beansEND \n  123.1235"},
{"tags":["Arithmetic Operator"],"Question":"What is the output of the following block of code?","type":"blank","questionImg":"15.jpg","answer":"-1"},
{"tags":["Switch Statements", "Conditions"],"Question":"Rewrite the following code using a switch statement that does the same as the if-else statement","type":"shortA","questionImg":"17.jpg","answerImg":"16.jpg", "answer":" "},
{"tags":["Arithmetic Operator"],"Question":"Attempt the following question","type":"shortA","questionImg":"18.jpg","answerImg":"19.jpg","answer":" "},
{"tags":["Arrays"],"Question":"What is wrong with this code? Fix and rewrite the program.","type":"shortA","questionImg":"20.jpg","answerImg":"21.jpg","answer":"Although the syntax for the code is correct the problem with the code is the logic. By assigning arr2 to be equal to arr1 you are not copying the array, but instead you are changing the same array.\nTo copy an array you have to use the Arrays.copyOf(nameOfArray, int size);"},
{"tags":["exceptions"],"Question":"The following code block may throw an exception, modify it using try and catch blocks to catch and handle exceptions (printing an error message is a good way to handle an exception in this example)","type":"shortA","questionImg":"23.jpg","answerImg":"22.jpg", "answer":" "},
{"tags":["String"],"Question":" ","type":"shortA","questionImg":"24.jpg","answerImg":"25.jpg", "answer":" "},
{"tags":["Conditions"],"Question":"Write a method called CheckPassFail that will take an int argument called mark. The method prints “Pass” if mark is more than or equal to 50 or prints “Fail” otherwise.\nThe program shall always print “Done” before exiting.","type":"shortA","answerImg":"26.jpg","answer":" "},
{"tags":["Loops"],"Question":"Convert the following for loop to a while loop","type":"shortA","questionImg":"27.jpg","answerImg":"28.jpg","answer":" "},
{"tags":["Arithmetic Operator"],"Question":" ","type":"blank","questionImg":"29.jpg","answer":"System.out.println(dateOfBirth % 100);"},
{"tags":["Variables"],"Question":" ","type":"superMCQ","questionImg":"30.jpg", "options":["a", "b", "c", "d", "e"], "answer":["int b, thisIsMyFirstVariable, p45321, number; ", "System.out.println(\"Please enter an int\");", "Scanner input = new Scanner(System.in); \n \t int value = input.nextInt(); ", "System.out.println(\"Java is Object Oriented and Robust\"); ", "if (number != 10) {\n   System.out.println(\"The variable number is not equal to 10\");\n   } "]},
{"tags":["Scanner"],"Question":"Write one line of code that creates a Scanner object that is initialized to null.","type":"blank","answer":"Scanner input = null;  "},
]
