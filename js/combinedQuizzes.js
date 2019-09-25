java1v1 = [
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
  	options: ["public static void main (String args)","public static void main (strings[] args)","public static void main (String[] args)","Public void static main (String[] args)"],
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
  {"options":[""],"type":"shortA","Question":"Write a static method called closestToZero which has two parameters, both of type double. The method will return whichever parameter is closest to zero. For instance, if the method is called with the values 7.2 and -5.5, it should return -5.5, because -5.5 is closest to zero.","answer":"","tags":[""],"answerImg":"zero.jpg"},
  {
      Question: "While loops are known as top-checking loops because the condition is in the top. True or false?",
      type: "True/False",
      tags: ["Theory","Loops"],
      answer: "True"
  },
  {
      Question: "Do-while loops are known as bottom-checking loops because the condition is in the top. True or false?",
      type: "True/False",
      tags: ["Theory", "Loops"],
      answer: "False"
  },
  {
      Question: "We put else-if when we want to put additional conditions in an if statement. True or false?",
      type: "True/False",
      tags: ["Theory", "If Statements"],
      answer: "False"
  },
  {
      Question: "Always put == instead of = when comparing two values in a condition. True or false?",
      type: "True/False",
      tags: ["Conditions"],
      answer: "True"
  },
  {
      Question: "You should always use an if statement instead of a switch statement when you want to use ranges (ie. i > 5). True or false?",
      type: "True/False",
      tags: ["Switch Statements"],
      answer: "True"
  },
  {
      Question: "Using printf(), %f is used for double/float values and %d is used for int values. True or false?",
      type: "True/False",
      tags: ["Theory", "Variables", "Strings"],
      answer: "True"
  },
  {
      Question: "% is used for modulus division (gets the remainder), while / is used for regular division (gets the quotient). True or false?",
      type: "True/False",
      tags: ["Theory", "Arithmetic Operators"],
      answer: "True"
  },
  {
      Question: "Concatenating is when you turn an int into a String. True or false?",
      type: "True/False",
      tags: ["Theory", "Strings"],
      answer: "False"
  },
  {
      Question: "System.out.println() will move the cursor to the next line and then print. True or false?",
      type: "True/False",
      tags: ["Theory", "Output"],
      answer: "False"
  },
  {
      Question: "When we want to make a Scanner object, we type Scanner input = new Scanner(System.out); True or false?",
      type: "True/False",
      tags: ["Objects", "Scanner"],
      answer: "False"
  },
  {
      Question: "The output of System.out.printf(\"%5.2f\", 1.45) is 1.45 with a blank space in the front of it. True or false?",
      type: "True/False",
      tags: ["Output", "Variables"],
      answer: "True"
  },
  {
      Question: "According to our coding standards, we should just ask user for an input without a prompt (ie. “Please enter a number”). A prompt is completely optional. True or false?",
      type: "True/False",
      tags: ["Scanner", "Coding Conventions"],
      answer: "False"
  },
  {
      Question: "If none of the conditions match in an if statement, it will automatically go to the else if block. True or false?",
      type: "True/False",
      tags: ["If Statements"],
      answer: "False"
  },
  {
      Question: "Syntax errors is when you make an error in typing your program. It should occur before you run your program. True or false?",
      type: "True/False",
      tags: ["Syntax", "Errors"],
      answer: "True"
  },
  {
      Question: "Logic errors and run-time errors are exactly the same. There are no differences. True or false?",
      type: "True/False",
      tags: ["Errors", "Theory"],
      answer: "False"
  },
  {
      Question: "We use break in switch statements instead of continue. True or false?",
      type: "True/False",
      tags: ["Switch Statements"],
      answer: "True"
  },
  {
      Question: "If your code compiles then there are no logic errors. True or false?",
      type: "True/False",
      tags: ["Compiler", "Errors"],
      answer: "False"
  },
  {
      Question: "If your code does not compile then you have syntax errors. True or false?",
      type: "True/False",
      tags: ["Compiler", "Errors"],
      answer: "True"
  },
  {
      Question: "If your code compiles then you can have logic errors and/or run-time errors. True or false?",
      type: "True/False",
      tags: ["Compiler", "Errors"],
      answer: "True"
  },
  {
      Question: "It’s possible that a while loop or do-while loop may run infinite times. True or false?",
      type: "True/False",
      tags: ["Loops", "Theory"],
      answer: "True"
  },
  {
      Question: "Which type of loop runs at least once?",
      type: "mcq",
      tags: ["Loops", "Theory"],
      options: ["do-while loops", "while loops", "until loops", "for loops"],
      answer: "do-while loops"
  },
  {
      Question: "What keyword is used to exit out of a loop completely?",
      type: "mcq",
      tags: ["Loops", "Theory", "Keywords"],
      options: ["end", "break", "continue", "None of the above"],
      answer: "break"
  },
  {
      Question: "What keyword is used to skip an iteration of a loop?",
      type: "mcq",
      tags: ["Loops", "Theory"],
      options: ["end", "break", "continue", "None of the above"],
      answer: "continue"
  },
  {
      Question: "When writing your program, what must be typed first after the package?",
      type: "mcq",
      tags: ["Theory"],
      options: ["import statement", "class declaration", "main method declaration", "variable declaration"],
      answer: "import statement"
  },
  {
      Question: "Boolean can only have what type of values?",
      type: "mcq",
      tags: ["Theory", "Variables"],
      options: ["1 and 0", "true and false", "true/1 and false/0", "None of the above"],
      answer: "1 and 0"
  },
  {
      Question: "How many “else-if” can we have in an entire if block?",
      type: "mcq",
      tags: ["If Statements", "Theory"],
      options: ["1", "1 for each part of the if statement", "As many as you want, depending on your hard drive space", "None, because once you put an else you can no longer have else if"],
      answer: "As many as you want, depending on your hard drive space"
  },
  {
      Question: "What value will x receive in the line:  int x  = 5 / 6 ?",
      type: "mcq",
      tags: ["Variables", "Theory"],
      options: ["0.8", "0.83", "0.83333", "0"],
      answer: "0"
  },
  {
      Question: "What value will y receive in the line double y = 5 / 6 ?",
      type: "mcq",
      tags: ["Variables", "Theory"],
      options: ["0.8", "0.83", "0.83333", "0.0"],
      answer: "0.0"
  },
  {
      Question: "What will the following code output?",
      type: "mcq",
      questionImg: "If1.jpg",
      tags: ["If Statements", "Output"],
      options: ["The number is 5 (page break) The number is not 5", "The number is not 5", "There will be no output", "The number is 5"],
      answer: "The number is not 5"
  },
  {
      Question: "Why do we need a break in a switch statement?",
      type: "mcq",
      tags: ["Theory","Switch Statements"],
      options: ["To prevent falling through multiple cases", "To prevent us from reevaluating the switch statement", "To stop the control variable from changing", "To handle errors in the switch statements"],
      answer: "To prevent falling through multiple cases"
  },
  {
      Question: "What is the keyword used in a switch statement for non-matching cases?",
      type: "mcq",
      tags: ["Theory", "Keywords", "Switch Statements"],
      options: ["else","default","else if", "fixed"],
      answer: "default"
  },
  {
      Question: "What is the keyword used in an if statement for non-matching cases?",
      type: "mcq",
      tags: ["Theory", "Keywords", "If Statements"],
      options: ["else", "default", "else if", "fixed"],
      answer: "else"
  },
  {
      Question: "Which of the following is a primitive type?",
      type: "mcq",
      tags: ["Theory", "Variables"],
      options: ["bit", "Double", "double", "bool"],
      answer: "double"
  },
  {
      Question: "Which of the following is not a primitive type?",
      type: "mcq",
      tags: ["Theory", "Variables"],
      options: ["boolean", "int", "String", "char"],
      answer: "String"
  },
  {
      Question: "Where is the condition in a while loop?",
      type: "mcq",
      tags: ["Theory", "Loops"],
      options: ["At the top.", "At the bottom.", "While loops do not have conditions. They’re only located out of the while loop.", "Conditions are always in the middle of the loop."],
      answer: "At the top."
  },
  {
      Question: "What is not a fact about while loops and do-while loops?",
      type: "mcq",
      tags: ["Theory", "Loops"],
      options: ["While loop may never run, do-while loops run at least once.", "While loop have their conditions at the top, do-while loops have it at the bottom.", "While loops are ended with a curly bracket, do-while loops end with a semi-colon.", "While loops must have at least one line of code inside for it to run, do-while loops can have no code inside for it to run."],
      answer: "While loops must have at least one line of code inside for it to run, do-while loops can have no code inside for it to run."
  },
  {
      Question: "What is not a part of the for loop declaration?",
      type: "mcq",
      tags: ["Theory", "Loops"],
      options: ["Initialization of a control variable.", "Displaying the current loop.", "Condition of the loop.", "Incrementing of the control variable"],
      answer: "Displaying the current loop."
  },
  {
      Question: "If we want multiple selections in an if statement, what’s the best option to do?",
      type: "mcq",
      tags: ["Theory", "If Statements"],
      options: ["Add else if to the if block.", "Only use else", "You can’t make multiple selections in an if statement", "Add default to the if block"],
      answer: "Add else if to the if block."
  },
  {
      Question: "Which code will print out the value of the variable “var” and then increment it?",
      type: "mcq",
      tags: ["Theory", "Variables", "Output"],
      options: ["System.out.println(++x);", "System.out.println(x + 1);", "System.out.println(x += 1);", "System.out.println(x++);"],
      answer: "System.out.println(x++);"
  },
  {
      Question: "What is not a way to convert a number into a String? Assume the variable “num” is an int.",
      type: "mcq",
      tags: ["Theory", "String", "Output"],
      options: ["System.out.println(\" \" + num);", "System.out.println(String.valueOf(num));", "System.out.println(num);", "System.out.println(num + \" \")"],
      answer: "System.out.println(num);"
  },
  {
      Question: "Fill in the blanks:",
      type: "superMCQ",
      tags: ["Theory", "Classes", "Objects"],
      options: ["Classes exist at: ", "Objects exist at: "],
      answer: ["design time", "run time"]
  },
  {
      Question: "Fill in the blanks assuming that x is 1:",
      type: "superMCQ",
      tags: ["Conditions"],
      options: ["(true) && (3 > 4)", "!(x > 0) && (x > 0)", "(x > 0) || (x < 0)", "(x != 0) || (x == 0)", "(x >= 0) || (x < 0)", "(x != 1) == !(x == 1)"],
      answer: ["false", "false", "true", "true", "true", "true"]
  },
  {
      Question: "\"Welcome to Java\".indexOf(\"come\") returns what?",
      type: "superMCQ",
      tags: ["Output", "Strings"],
      options: [" "],
      answer: "3"
  },
  {
      Question: "Fill in the blanks: ",
      type: "superMCQ",
      tags: ["Variables", "String"],
      options: ["\"13\" has the data type:", "13 has the data type: ", "13.0 has the datatype: "],
      answer: ["String", "int", "double"]
  },
  {
      Question: "To prevent from falling through cases in a switch statement we use the keyword: ",
      type: "superMCQ",
      tags: ["Switch Statements", "Keywords"],
      options: [" "],
      answer: "break"
  },
  {
      Question: "When a loop is always looping and never ends it is called a(n) __________ loop",
      type: "blank",
      tags: ["Theory", "Loops"],
      options: [""],
      answer: "infinite"
  },
  {
      Question: "We use the keyword __________ to get out of a loop completely",
      type: "blank",
      tags: ["Theory", "Loops", "Keywords"],
      options: [""],
      answer: "break"
  },
  {
      Question: "We use the keyword __________ to skip an iteration of a loop",
      type: "blank",
      tags: ["Theory", "Loops", "Keywords"],
      options: [""],
      answer: "continue"
  },
  {
      Question: "The three types of loops are: ",
      type: "superMCQ",
      tags: ["Theory", "Loops"],
      options: ["", "", ""],
      answer: ["do while", "while", "for"]
  },
  {
      Question: "We should use a(n) _________ statement when we want to set the condition to be between a range of number",
      type: "blank",
      tags: ["Theory", "If Statements"],
      options: [""],
      answer: "if"
  },
  {
      Question: "The = symbol is called the __________ operator is Java",
      type: "blank",
      tags: ["Theory"],
      options: [""],
      answer: "assignment"
  },
  {
      Question: "When we run the line \"Scanner input = new Scanner(System.in)\" we are making a(n) __________ of the Scanner class.",
      type: "blank",
      tags: ["Theory", "Objects", "Scanner"],
      options: [""],
      answer: "object"
  },
  {
      Question: "next(), toString(), nextInt(), and toUpperCase() are all examples of ",
      type: "blank",
      tags: ["Theory", "Methods"],
      options: [""],
      answer: "methods"
  },
  {
      Question: "All loops will continue to run as long as the condition is ",
      type: "blank",
      tags: ["Theory" ,"Loops"],
      options: [""],
      answer: "true"
  },
  {
      Question: "Do-while loops have slightly different syntax than the other two loops because they end with a(n) ",
      type: "blank",
      tags: ["Theory", "Loops"],
      options: [""],
      answer: "semicolon"
  },
  {
      Question: "In a switch statement we use __________ for non-matching cases",
      type: "blank",
      tags: ["Theory", "Switch Statements"],
      options: [""],
      answer: "default"
  },
  {
      Question: "In an if statement we use __________ for non-matching if statements",
      type: "blank",
      tags: ["Theory", "If Statements"],
      options: [""],
      answer: "else"
  },
  {
      Question: "The __________ loops is a definite loop because we know exactly how many times it will run",
      type: "blank",
      tags: ["Theory", "Loops"],
      options: [""],
      answer: "for"
  },
  {
      Question: "When receiving input from the user, what is the difference between next() and nextLine()?",
      type: "blank",
      tags: ["Theory", "Scanner"],
      options: [""],
      answer: "next() will only get the user input up until the first blank space. nextLine() will get the user input until the very end, regardless if it has black spaces or not."
  },
  {
      Question: "What is the output of the following code?",
      type: "blank",
      questionImg: "Output.jpg",
      tags: ["Output"],
      options: [""],
      answer: "false"
  },
  {
      Question: "Write the output if x=8 and y=0:",
      type: "blank",
      questionImg: "If2.jpg",
      tags: ["Output", "If Statements"],
      options: [""],
      answer: "Nothing"
  },
  {
      Question: "What is produced when a Java source file is compiled?",
      type: "blank",
      tags: ["Theory", "Compiler"],
      options: [""],
      answer: "Bytecode"
  },
  {
      Question: "Whenever we make a Scanner object, what do we always need to put at the very top of the program?",
      type: "blank",
      tags: ["Scanner"],
      options: [""],
      answer: "import java.util.Scanner or java.util.*"
  },
  {
      Question: "What is the difference between a class and an object?",
      type: "blank",
      tags: ["Theory", "Objects", "Classes"],
      options: [""],
      answer: "A class contains data and functionality. An object is basically a reference of that class. Whenever we want to use something from another class (ex. Scanner) we usually make an object first so that we can use the specific functionality from the class."
  },
  {
      Question: "Why is “String” spelled with an uppercase \"S\" instead of a lowercase \"S\"?",
      type: "blank",
      tags: ["String", "Datatypes", "Theory"],
      options: [""],
      answer: "String is a class and classes start with an uppercase letter. Primitive types are only in lowercase letters, but String is not a primitive type."
  },
  {
      Question: "If you were given the variable name “numberofdogs,” would this be a proper variable name according to our coding standards? Explain:",
      type: "blank",
      tags: ["Theory", "Variables"],
      options: [""],
      answer: "No because it should follow the rules of camelCase. This mean that each word’s first letter must be uppercase, except for the first letter. Another advice is to keep the variable name short, such as \"numDogs\"."
  },
  {
      Question: "List the 8 primitive data types in Java:",
      type: "blank",
      tags: ["Theory", "Variables"],
      options: [""],
      answer: "byte, short, int, long, float, double, char, boolean"
  },
  {
      Question: "When using the charAt() method on a String, what number do you need to put in the parenthesis to get the first character of the String? Explain:",
      type: "blank",
      tags: ["Theory", "Strings", "Methods"],
      options: [""],
      answer: "You must put 0 inside the parenthesis. If you put 1, then it will give you the second letter of a String."
  },
  {
      Question: "Suppose that when you run the following program you enter the input 2 3 6 from the console. What will the output be?",
      type: "blank",
      questionImg: "Sort.jpg",
      tags: ["Scanner", "Output"],
      options: [""],
      answer: "sorted"
  },
  {
      Question: "What is the output if number is 30?",
      type: "blank",
      questionImg: "If3.jpg",
      tags: ["Output", "If Statements"],
      options: [""],
      answer: "30 is even \n30 is odd"
  },
  {
      Question: "What would be the output of the following program:",
      type: "blank",
      questionImg: "ForLoop.jpg",
      tags: ["Output", "Loops"],
      options: [""],
      answer: "1\n2\n1\n2\n2\n3"
  },
  {
      Question: "Why do we use breaks in a switch statement?",
      type: "blank",
      tags: ["Theory", "Switch Statements"],
      options: [""],
      answer: "Break statements allow us to break out the switch statement, and stops us from “falling through” to the other cases."
  },
  {
      Question: "Examine the following code segment, then answer the questions below:",
      type: "blank",
      questionImg: "switchExample2.jpg",
      tags: ["Switch Statements", "Output"],
      options: ["What does the program print?", "If variable c was instead initialized to 'b', what would the program print?", "If variable c was instead initialized to 'c', what would the program print?", "If variable c was instead initialized to 'd', what would the program print?"],
      answer: ["1&4", "2&4", "3&4", "&4"]
  },
  {
      Question: "What is the difference between String and data types such as int, char or boolean?",
      type: "blank",
      tags: ["Variables", "Theory"],
      options: [""],
      answer: "String is not a primitive type, whereas int, char, and boolean are. String is a class, whereas the other types are not."
  },
  {
      Question: "Assume there’s a String variable named “str” with the value “Happy Birthday” and answer the following questions:",
      type: "blank",
      tags: ["String", "Methods"],
      options: ["What is the value of str.charAt(0)?", "What is the value of str.charAt(1)?", "What is the value of str.length()?", "What is the value of str.substring(3, 8)?"],
      answer: ["H", "a", "14", "py Bi"]
  },
  {
      Question: "Write a program that asks the user to input their weight in kilograms and the program prints out the weight in pounds. As the weight cannot be negative, the program gives an error message saying \"Weight cannot be less than 0\"\nSample run:\nEnter your weight in Kilograms: 65\nYour weight in Pounds is: 143.0 pounds",
      type: "shortA",
      tags: ["Scanner", "Output"],
      options: [""],
      answer: "",
      answerImg: "Code1.jpg"
  },
  {
      Question: "Convert the following to a do-while loop:",
      type: "shortA",
      questionImg: "Code2.jpg",
      tags: ["Loops", "Scanner"],
      options: [""],
      answer: "",
      answerImg: "Code3.jpg"
  },
  {
      Question: "Write a program that calculates the grade of a student. Take the user input for marks and  if the marks are less than 50 print out fail, if marks are in between 50 and 60 print out D grade, if marks are in between 60 and 70 print out C grade, if the marks are in between 70 and 80 print out B grade and if the marks are over 80 print out A grade.",
      type: "shortA",
      tags: ["If Statements", "Scanner", "Output"],
      options: [""],
      answer: "",
      answerImg: "Code4.jpg"
  },
  {
      Question: "Take ten integer inputs from the user and add the numbers only if they are prime.",
      type: "shortA",
      tags: ["Scanner", "Output", "Loops", "If Statements"],
      options: [""],
      answer: "",
      answerImg: "Code5.jpg"
  },
  {
      Question: "What will the following code print out at the very end? The comments indicate what the user inputted.",
      type: "blank",
      tags: ["Scanner", "Loops", "Output"],
      options: "",
      answer: "Your total bill is: 63.40"
  },
  {
      Question: "Write a program that randomly generates an integer between 1 and 12 and displays the English month name January, February, …, December for the number 1, 2, …, 12, accordingly.",
      type: "shortA",
      tags: ["Switch Statements", "Output"],
      options: [""],
      answer: "",
      answerImg: "Code6.jpg"
  },
  {
      Question: "Display the following output using nested for loops:",
      type: "shortA",
      questionImg: "Code7.jpg",
      tags: ["Loops", "Output"],
      options: [""],
      answer: "",
      answerImg: "Code8.jpg"
  },
  {
      Question: "Create a class named CharacterDisplay which displays each character from a String inputted by the user. Ask the user for a String and then display each character on a separate line (including the blank spaces). Use a loop. Here’s an example:",
      questionImg: "Code9.jpg",
      type: "shortA",
      tags: ["Strings", "Output", "Loops", "Scanner"],
      options: [""],
      answer: "",
      answerImg: "Code10.jpg"
  },
  {
      Question: "Convert the following switch statement into an if statement:",
      questionImg: "Code11.jpg",
      type: "shortA",
      tags: ["If Statements", "Switch Statements"],
      options: [""],
      answer: "",
      answerImg: "Code12.jpg"
  },
  {
      Question: "Write Java statements to accomplish each each of the following tasks:",
      tags: ["Arithmetic Operators"],
      type: "superMCQ",
      options: ["Use one statement to assign the sum of x and y to z, then increment x by 1", "Use one statement to decrement the variable x by 1, then subtract it from variable total and store the result in variable total", "Calculate the remainder after q is divided by \"divisor\", and assign the result to q. Write this statement in two different ways."],
      answer: ["z = (x++) + y;", "total = total - (--x);", "q = q % divisor; or q %= divisor;"]
  },
  {
      Question: "Convert the following while loop into a for loop",
      questionImg: "Code13.jpg",
      tags: ["Loops"],
      type: "shortA",
      options: "",
      answer: "",
      answerImg: "Code14.jpg"
  },{"type":"true/false","Question":"Assume that an array called “arr” has 4 elements in it. To use the second element in this array we say arr[2]. True or False?","answer":"False","tags":["Arrays"]},
  {"type":"true/false","Question":"We use the keyword void to make a method return nothing. True or False?","answer":"True","tags":["Keywords","Methods"]},
  {"type":"true/false","Question":"Overloaded methods are methods that have the same name but different parameters. True or False?","answer":"True","tags":["Methods"]},
  {"type":"true/false","Question":"The method declaration public String doThis(char x) returns a char and accepts a String. True or False?","answer":"False","tags":["Methods"]},
  {"type":"true/false","Question":"A while loop is called a top-checking loop because the condition is checked at the top. True or False?","answer":"True","tags":["Loops"]},
  {"type":"true/false","Question":"A do-while loop is called a top-checking loop because the condition is checked at the top. True or False?","answer":"False","tags":["Loops"]},
  {"type":"true/false","Question":"A for loop consists of three parts: a control variable, a condition, and incrementing. True or False?","answer":"True","tags":["Loops"]},
  {"type":"true/false","Question":"We make classes out of objects. True or False?","answer":"False","tags":["Objects","Theory"]},
  {"type":"true/false","Question":"To check if two Strings are the same we should use the compareTo() method. True or False?","answer":"False","tags":["Methods"]},
  {"type":"true/false","Question":"The keyword break can be used to skip an iteration of a loop. True or False?","answer":"False","tags":["Loops","Keywords"]},
  {"type":"true/false","Question":"If we wanted to completely exit out of a loop we use the keyword break. True or False?","answer":"True","tags":["Loops","Keywords"]},
  {"type":"true/false","Question":"Assume a class had a method with the following declaration private static void doSomething(String x, int y). We call that method by doing doSomething(6, “Happy”); in the main method of the same class. True or False?","answer":"False","tags":["Methods"]},
  {"type":"true/false","Question":"We create objects out of the Scanner class and we use that object to call methods from that class. True or False?","answer":"True","tags":["Scanner","Objects","Methods"]},
  {"type":"true/false","Question":"We use a try-caught block to handle exceptions. True or False","answer":"False","tags":["Errors"]},
  {"type":"true/false","Question":"if statements should be used when you want to check for a range of numbers (ie. between 4 to 55) True or False?","answer":"True","tags":["Conditions"]},
  {"type":"true/false","Question":"Switch statements cannot test for boolean and double values. True or False?","answer":"True","tags":["Switch Statements","Conditions"]},
  {"type":"true/false","Question":"Local variables can only be seen in the scope that they're in","answer":"True","tags":["Variables","Theory"]},
  {"type":"true/false","Question":"Java is a second generation programming language","answer":"False","tags":["Theory"]},
  {"type":"true/false","Question":"Static variables belong to the class and instance variables belong to the object","answer":"True","tags":["Variables","Objects"]},
  {"type":"true/false","Question":"To use a static method from another class we do ClassName.methodName()","answer":"True","tags":["Methods","Syntax"]},
  {"options":["int[] arr = new int[4];","int[][] arr = new int[5];","int[] arr = new int[5];","int[] arr = new int[6];"],"type":"mcq","Question":"Which of the following creates an int array named “arr” that can hold 5 elements?","answer":"int[] arr = new int[5];","tags":["Arrays","Syntax"]},
  {"options":["for ( ; ; )","for (int i = 0; i < 5; i++)","for (int j = 50; j > 0; --j)","for (int i = 0; i < 5; i++;)"],"type":"mcq","Question":"Which of the following is not a valid for loop declaration?","answer":"for (int i = 0; i < 5; i++;)","tags":["Loops","Syntax"]},
  {"options":["Scanner","int","new","break"],"type":"mcq","Question":"What keyword is used to make an object?","answer":"new","tags":["Syntax","Keywords"]},
  {"options":["Instance variables can be called by doing ClassName.methodName();","Instance variables belong to the class","Instance variables can be called by doing objectName.variableName;","Instance variables can only exist during a run-time error"],"type":"mcq","Question":"What is a true statement about public instance variables?","answer":"Instance variables can be called by doing objectName.variableName","tags":["Variables","Syntax"]},
  {"options":["Scanner input = new Scanner(System.in);","Scanner","Math.pow(5"," 2);","input.nextInt();"],"type":"mcq","Question":"Which of the following is an object? ","answer":"Scanner input = new Scanner(System.in);","tags":["Variables","Objects"]},
  {"options":["When the keyword void is used in a method declaration","When the method is overloaded (ie. methods with the same name but different parameters)","When the keyword static is used in a method declaration","When the keyword static is used in a method definition"],"type":"mcq","Question":"What defines a static method? ","answer":"When the keyword static is used in a method declaration","tags":["Methods","Keywords"]},
  {"options":["String NAME = 'A';","int 999dogs;","byte num-dogs = 50;","double NAME;"],"type":"mcq","Question":"Which of the following variable declarations will not give a compile error?","answer":"double NAME;","tags":["Variables","Syntax"]},
  {"options":["while loops","do-while loops","for loops","All of the above"],"type":"mcq","Question":"What type of loop should you use so that the loop always runs at least once?","answer":"do-while loops","tags":["Loops"]},
  {"options":["str1 != str2","str2 != str1","str1.notEquals(str2)","!str1.equals(str2)"],"type":"mcq","Question":"What is the correct way to check if two strings (ex. str1 and str2) are different?","answer":"!str1.equals(str2)","tags":["String","Syntax"]},
  {"options":["Method overloading","Unlimited parameters","Method overriding","Exception"],"type":"mcq","Question":"When we use the println() method, what aspect of Java allows us to pass it a String, an int, a double or other data types?","answer":"Method overloading","tags":["Theory","Methods"]},
  {"options":["char[] array2 = array1[];","char[] array2 = array1;","char[] array2 = Arrays.copyOf(array1"," array1.length);","Both b) and c)","char[] array2 = Arrays.copyOf(array1);"],"type":"mcq","Question":"Assume that there is a char array called “array1”. What is the best way to make a copy of this array? ","answer":"char[] array2 = Arrays.copyOf(array1, array1.length);","tags":["Arrays","Syntax"]},
  {"options":[". (dot) operator","new operator","= (assignment) operator","( ) operator"],"type":"mcq","Question":"Which Java operator is used with an object variable to access fields or methods belonging to that object?","answer":". (dot) operator","tags":["Objects","Syntax"]},



];
