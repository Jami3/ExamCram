var java2V1 = [
  {
    Question: "Composition is a stronger form of Aggregation",
    type: "True/False",
    tags: ["Inheriitance"],
    answer: "True"
  },
  {
    Question: "Objects of abstract classes can be instantiated ",
    type: "True/False",
    tags: ["Classes"],
    answer: "False"
  },
  {
    Question: "Static methods cannot be accessed directly from class level ",
    type: "True/False",
    tags: ["Inheriitance"],
    answer: "False"
  },
  {
    Question: "After a try { } block, you are only allowed to have up to 3 catch() { } Blocks below it.",
    type: "True/False",
    tags: ["Inheriitance"],
    answer: "False"
  },
  {
    Question: "You can create your own Exception classes by extending the Exception class. ",
    type: "True/False",
    tags: ["Inheriitance"],
    answer: "True"
  },
  {
    Question: "When an int is passed to a method, a new copy of the int is created and used by the method ",
    type: "True/False",
    tags: ["Inheriitance"],
    answer: "True"
  },
  {
    Question: "Java supports multiple inheritance ",
    type: "True/False",
    tags: ["Inheriitance"],
    answer: "False"
  },
  {
    Question: "When a Java array is passed to a method, a new copy of the array is created and used by the method",
    type: "True/False",
    tags: ["Inheriitance"],
    answer: "False"
  },
  {
    Question: "When using an interface, you can pick and choose which abstract methods you override and implement. ",
    type: "True/False",
    tags: ["Inheriitance"],
    answer: "False"
  },
  {
    Question: "It is possible for a try block to exist by itself (ie. without a catch or finally block). ",
    type: "True/False",
    tags: ["Inheriitance"],
    answer: "False"
  },

  {"Question":"The proper way to begin a Javadoc Comment is:","type":"mcq","options":["**/","//*","/**","**/"],"answer":"/**"},
  {"Question":"12.\tPackages in Java are mostly used for:","type":"mcq","options":["Organization of classes","Faster code compilation","Nothing, they don’t exist in Java","Enable more functionality"],"answer":"Organization of classes"},
  {"Question":"Class Association is best described as a _______ relation between two classes","type":"mcq","options":["Binary","Ternary","Quaternary","Single"],"answer":"Binary"},
  {"Question":"Aggregation models which kind of relationships?","type":"mcq","options":["Is-a","Has-a","Binary","None of the above"],"answer":"Has-a"},
  {"Question":"The purpose of the “protected” keyword is to","type":"mcq","options":["Give subclasses access to items in the superclass","Give all classes access to specific items","Make certain things read-only, but not write back","Give superclasses access to items in the subclass"],"answer":"Give subclasses access to items in the superclass"},
  {"Question":"Suppose there are three classes: Dog, Husky, and Bulldog. What are the likely relationship between these classes?","type":"mcq","options":["Husky and Bulldog are superclasses. Dog is the subclass of both classes.","Dog is the superclass. Husky and Bulldog are subclasses of Dog.","Dog is the superclass. Husky is the subclass of Dog. Bulldog is the subclass of Husky.","Dog, Husky and Bulldog are unrelated and do not have a relationship."],"answer":"Dog is the superclass. Husky and Bulldog are subclasses of Dog."},
  {"Question":"Constructor chaining is achieved through:","type":"mcq","options":["Calling super();  in a class method","Calling super();  in the class constructor","There is no such thing as constructor chaining in Java","Calling super();  in a the main method"],"answer":"Calling super();  in the class constructor"},
  {"Question":"Which of these statements about constructors is false?","type":"mcq","options":["A constructor has no return type.","Its name must be the same as the class in which it is defined.","There must be exactly one constructor defined for a class.","Constructors are almost always declared as public."],"answer":"There must be exactly one constructor defined for a class."},
  {"Question":"The process by which one object can acquire the properties of another object is known as","type":"mcq","options":["Encapsulation","Inheritance","Polymorphism","Overloading & Overriding"],"answer":"Inheritance"},
  {"Question":"When using a method that could potentially throw an exception, what are the two ways this situation could be handled?","type":"mcq","options":["Ignore it and hope for the best","Put throws in your method declaration and deal with it somewhere else","Put throws in your method declaration and deal with it somewhere else","B & C"],"answer":"B & C"},
  {"Question":"Which of these keywords is not a part of exception handling?","type":"mcq","options":["try","finally","thrown","catch"],"answer":"thrown"},
  {"Question":"When  creating an Interface source file, how is it declared?","type":"mcq","options":["public class interface myInterface { }","public interface class myInterface { }","public interface myInterface { }","public abstract interface myInterface { }"],"answer":"public interface myInterface { }"},
  {"Question":"What is the correct syntax to create a primitive multi-dimensional  int array with 2 rows and 5 columns?","type":"mcq","options":["int multiArr = new MultiDimensionalArray(2,5);","Int[] multiArr;","int [2,5] multiArr;","int[][] multiArr = new int[2][5];"],"answer":"int[][] multiArr = new int[2][5];"},
  {"Question":"Consider the following code:  \ntry(java.io.PrintWriter output = new java.io.PrintWriter(file);) { }\ncatch(Exception ex) { }","type":"mcq","options":["This will automatically close the file after it is done being used","This is invalid code, you can’t have try()","There is no benefit to using this","B & C"],"answer":"This will automatically close the file after it is done being used"},
  {"Question":"The keyword in Java to use an interface in a class is:","type":"mcq","options":["implements","extends","abstracts","defaults"],"answer":"implements"},
  {"Question":"How many interfaces can one class implement?","type":"mcq","options":["one","two","three","multiple"],"answer":"multiple"},
  {"Question":"Encapsulation of instance variables is typically achieved through using what modifier?","type":"mcq","options":["public","private","protected","default"],"answer":"private"},
  {"Question":"When you implement the same method that is defined in a superclass, you _______ the original method.","type":"mcq","options":["copy","overload","override","call"],"answer":"override"},
  {"Question":"Which of the following inheritance relationships doesn’t make sense?","type":"mcq","options":["Superclass named Account, subclass named ChequingAccount","Subclass named Number, superclass named Binary","Subclass named Glider, superclass named Vehicle","Superclass named Interface, subclass named USB"],"answer":"Subclass named Number, superclass named Binary"},
  {"Question":"In JavaFX, the classes Button and TextField are both subclasses of","type":"mcq","options":["Stage","Scene","Control","Pane"],"answer":"Control"},
  {"Question":"A final method: ","type":"mcq","options":["Is constant. Its value cannot be changed","Cannot be overloaded","Cannot be overridden","Cannot be subclassed"],"answer":"Cannot be overridden"},
  {"Question":"A final class: ","type":"mcq","options":["Is constant. Its value cannot be changed","Is constant. Its value cannot be changed","Cannot be overridden","Cannot be subclassed"],"answer":"Cannot be subclassed"},
  {"Question":"Given the following variable: protected int numCalc; Which of the following statements below is true?","type":"mcq","options":["It can be accessed from a different package","It can not be accessed from a different package","It is the same as having a default or no modifier ","None of the above"],"answer":"It can not be accessed from a different package"},
  {"Question":"The String class allows for:","type":"mcq","options":["String manipulation","Storing values","Comparison of other objects and values","All of the above"],"answer":"All of the above"},
  {"Question":"What is the difference between an Abstract Class and an Interface?","type":"shortA","answer":"An abstract class can have abstract methods as well as regular methods. Interfaces only have methods that have no method definition."},
  {"Question":"Why are Javadocs & Documentation in general useful for programmers?","type":"shortA","answer":"It generates documentation that helps other programmers see what the code is doing."},
  {"Question":"What is the purpose of the @Override annotation?","type":"shortA","answer":"It indicates to the compiler that the method will be guaranteed to be overridden. It helps prevent errors."},
  {"Question":"What happens if you forget to write the visibility (ie. no private, public or protected) when declaring a field variable?","type":"shortA","answer":"The field variable can be accessed by other classes in the same package"},
  {"Question":"What is the difference between while loops and do-while loops?","type":"shortA","answer":"A while loop can possibly never run because it checks the condition at the top, but a do-while loop will run at least once because it checks for the condition at the bottom."},
  {"Question":"What is the difference between method overloading and method overriding?","type":"shortA","answer":"Method overloading is when there are multiple methods with the same name, but different parameters. Method overriding is when a method from the superclass has the same declaration as the same-name method in the subclass. The subclass class method will override the one in the superclass."},
  {"Question":"What is the difference between super() and super.methodName()? ","type":"shortA","answer":"super() will call the constructor from the superclass. super.methodName() will call that method from the superclass."},
  {"Question":"","type":"superMCQ","questionImg":"54.jpg","options":["Which method from the subclass overrides a method in the parent class?", "Which method hides a method in the Animal class?"],"answer":["Two()","Four()"]},
  {"Question":"What is the main purpose of encapsulation?","type":"shortA","answer":"To protect, separate and control the data of the class, from users or other methods of data manipulation"},
  {"Question":"Suppose class A has a subclass named B, and class B has a subclass named C. Each class has several fields and methods. What does class C inherit?","type":"shortA","answer":"Class C will inherit the fields & methods of Class B, but since Class B is a subclass of Class A then Class C will also inherit the fields & methods of class A"},
  {"Question":"Examine the following code. Write statements below which describe the relationship between the given pairs of classes in the program using the terms IS-A, HAS-A, and USES. If there’s not direct relationship, write “no relationship.” Example:  \nTestClass2, String: TestClass2 HAS-A String",
   "options": ["TestClass2, TestClass1 ", "TestClass2, Scanner ", "TestClass2, Double ", "TestClass2,ClassType "],
   "type":"superMCQ","answer":["TestClass2 IS-A TestClass1","TestClass2 HAS-A Scanner","No relationship","TestClass2 USES ClassType"],"questionImg":"55.jpg"},
   {"Question":"What is the output of this program?","type":"blank","questionImg":"56.jpg","answer":"B"},
   {"Question":"What is the output of this program?","type":"mcq","questionImg":"57.jpg","options":["0","05","Compilation Error","Runtime Error"],"answer":"Compilation Error"},
   {"Question":"Given the following code:  \nString firstString = \"Java ExamCram!\"; \nWhat will you get when you run the following code?","type":"superMCQ","answer":["14","Java ExamCram!","m","java examcram!"], "options":["firstString.length();", "firstString.trim();", "firstString.charAt(8);", "firstString.toLowerCase();"] },
   {"Question":"What is the result of the following code? ","type":"shortA","questionImg":"58.jpg","answer":"This will cause an IndexOutOfBoundsException because arr.length is equals to 4 and the element at arr[4] does not exist."},
   {"Question":"What happens when the following code is printed out? Assume that “objectName” is the reference variable of an object that has already been created.","type":"shortA","answer":"It will call the toString() method of that class"},
   {"Question":"Fix the following code so that it actually copies the array. \nint[] arr1 = new int[50]; \nint[] arr2 = arr1;","type":"shortA","answer":"The code above will point arr2 to the reference of arr1 so that any changes made in arr2 will change arr1.\nTo make a copy of arr1 into arr2 you need to use the Arrays.copyOf() method.\nint[] arr1 = new int[50];\nint[] arr2 = Arrays.copyOf(arr1);\n"},
   {"Question":"For the following array:\n int[] list = {1,2,3,4,5,6,7,8}; \nWhat does list[1] return?","type":"blank","answer":"2"},
   {"Question":"What does the following code print out?  ","type":"blank","questionImg":"59.jpg","answer":"5 10"},
   {"Question":"What does the following code print out?","type":"blank","questionImg":"60.jpg","answer":"3 16"},
   {"Question":"What is the output of running class B? Assume each class is in its own file.","type":"shortA","questionImg":"61.jpg","answer":"Class B\nClass A\n11"},
   {"Question":"What is the output of the following code?","type":"blank","questionImg":"62.jpg","answer":"BAA"},
   {"Question":"What is 2+2?","type":"mcq","options":["4","4","4","4"],"answer":"4"},

]
