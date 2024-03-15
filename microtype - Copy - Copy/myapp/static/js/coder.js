const testItem = document.getElementById("textDisplay");
const inputItem = document.getElementById("textInput");
const timeName = document.getElementById("timeName");
const time = document.getElementById("time");
const cwName = document.getElementById("cwName");
const wwName = document.getElementById("wwName");
const cw = document.getElementById("cw");
const ww = document.getElementById("ww");
const restartBtn = document.getElementById("restartBtn");
const thirty = document.getElementById("thirty");
const sixty = document.getElementById("sixty");
const one_twenty = document.getElementById("one_twenty");
const beg = document.getElementById("beg");
const pro = document.getElementById("pro");
const expert = document.getElementById("expert");
const best_pa = document.getElementById("best_pa");
const test = document.getElementById("test");

var wordNo = 1;
var wordsSubmitted = 0;
var wordsCorrect = 0;
var wordsWrong = 0;
var timer = 5;
var flag=0;
var factor=2;
var seconds;
var difficulty=1;
var best_pa_value=0;
var test_value=0;

displayTest(difficulty);

//on Input
inputItem.addEventListener('input', function(event){
  if(flag===0){
    flag=1;
    timeStart();
  }
  var charEntered = event.data;
  if(/\s/g.test(charEntered)){  //check if the character entered is a whitespace
    checkWord();
  }
  else{
    currentWord();
  }
});

//time selection
thirty.addEventListener("click",function(){
  timer = 30;
  factor = 2;
  limitColor(thirty,sixty, one_twenty);
  time.innerText = timer;
});
sixty.addEventListener("click",function(){
  timer = 60;
  factor = 1;
  limitColor(sixty, thirty, one_twenty);
  time.innerText = timer;
});
one_twenty.addEventListener("click",function(){
  timer = 120;
  factor = 0.5;
  limitColor(one_twenty, thirty, sixty);
  time.innerText = timer;
});

//difficulty Selection
beg.addEventListener("click",function(){
  difficulty = 1;
  displayTest(difficulty);
  limitColor(beg,pro,expert);
});
pro.addEventListener("click",function(){
  difficulty = 2;
  displayTest(difficulty);
  limitColor(pro,beg,expert);
});
expert.addEventListener("click",function(){
  difficulty = 3;
  displayTest(difficulty);
  limitColor(expert,beg,pro);
});

//set the color of time and difficulty
function limitColor(itema,itemr,itemr1 ){
  itema.classList.add('yellow');
  itemr.classList.remove('yellow');
  itemr1.classList.remove('yellow');
}

//restart the Test
restartBtn.addEventListener("click",function(){

  wordsSubmitted = 0;
  wordsCorrect = 0;
  wordsWrong = 0;
  flag=0;

  time.classList.remove("current");
  cw.classList.remove("current");
  ww.classList.remove("current");
  time.innerText = timer;
  timeName.innerText = "Time";
  cw.innerText = wordsCorrect;
  ww.innerText = wordsWrong;
  cwName.innerText = "Correct Words";
  wwName.innerText = "Wrong Words";
  inputItem.disabled = false;
  inputItem.value = '';
  inputItem.focus();

  displayTest(difficulty);
  clearInterval(seconds);
  limitVisible();
});

//start the timer countdown
function timeStart(){
  limitInvisible();
  seconds = setInterval(function() {
    time.innerText--;
    if (time.innerText == "-1") {
        timeOver();
        clearInterval(seconds);
    }
  }, 1000);
}

//disable textarea and wait for restart
function timeOver(){
  inputItem.disabled = true;
  restartBtn.focus();

  displayScore();
}

//set Limit visibility
function limitVisible(){
  thirty.style.visibility = 'visible';
  sixty.style.visibility = 'visible';
  one_twenty.style.visibility = 'visible';
  beg.style.visibility = 'visible';
  pro.style.visibility = 'visible';
  expert.style.visibility = 'visible';
}
function limitInvisible(){
  thirty.style.visibility = 'hidden';
  sixty.style.visibility = 'hidden';
  one_twenty.style.visibility = 'hidden';
  beg.style.visibility = 'hidden';
  pro.style.visibility = 'hidden';
  expert.style.visibility = 'hidden';
}

//display the score
function displayScore(){
  let percentageAcc = 0;
  if(wordsSubmitted!==0){
    percentageAcc = Math.floor((wordsCorrect/wordsSubmitted)*100);
  }

  time.classList.add("current");
  cw.classList.add("current");
  ww.classList.add("current");

  time.innerText = percentageAcc+"%";
  timeName.innerText = "ACCURACY";

  cw.innerText = factor*wordsCorrect;
  cwName.innerText = "WPM";

  ww.innerText = wordsWrong;

  test_value++;
  //store to db 

  //show from db

  
}

//check if the user is entering correct word
function currentWord(){
  const wordEntered = inputItem.value;
  const currentID = "word "+wordNo;
  const currentSpan = document.getElementById(currentID);
  const curSpanWord = currentSpan.innerText;

  if(wordEntered == curSpanWord.substring(0,wordEntered.length)){
    colorSpan(currentID, 2);
  }
  else{
    colorSpan(currentID, 3);
  }

}
//checks word entered
function checkWord(){
  const wordEntered = inputItem.value;
  inputItem.value='';

  const wordID = "word "+wordNo;
  const checkSpan = document.getElementById(wordID);
  wordNo++;
  wordsSubmitted++;

  if(checkSpan.innerText === wordEntered){
    colorSpan(wordID, 1);
    wordsCorrect++;
    cw.innerText=wordsCorrect;
  }
  else{
    wordsWrong++;
    ww.innerText=wordsWrong;
    colorSpan(wordID, 3);
  }

  if(wordNo>40){

    displayTest(difficulty);
  }
  else{
    const nextID = "word "+wordNo;
    colorSpan(nextID, 2);
  }
}

//color the words
function colorSpan(id, color){
  const span = document.getElementById(id);
  if(color === 1 ){
    span.classList.remove('wrong');
    span.classList.remove('current');
    span.classList.add('correct');
  }
  else if(color ===2){
    span.classList.remove('correct');
    span.classList.remove('wrong');
    span.classList.add('current');
  }
  else{
    span.classList.remove('correct');
    span.classList.remove('current');
    span.classList.add('wrong');
  }
}

//display the random words on screen
function displayTest(diff){
  wordNo = 1;
  testItem.innerHTML = '';

  let newTest = randomWords(diff);
  newTest.forEach(function(word, i){
    let wordSpan = document.createElement('span');
    wordSpan.innerText = word;
    wordSpan.setAttribute("id", "word " + (i+1));
    testItem.appendChild(wordSpan);
  });

  const nextID = "word "+wordNo;
  colorSpan(nextID, 2);
}

//Generate an array of random 50 words
function randomWords(diff){

  var expertWords = ["abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "default", "do", "double", "else", "enum", "extends", "final", "finally", "float", "for", "goto", "if", "implements", "import", "instanceof", "int", "interface", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "strictfp", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile", "while", "List<String>", "ArrayList<String>", "Collections.sort", "Collections.shuffle", "Arrays.sort", "Arrays.toString", "Math.max", "Math.min", "Math.abs", "String.valueOf", "Integer.parseInt", "Integer.toString", "System.out.println", "System.in", "System.out", "System.err", "Scanner", "File", "FileInputStream", "FileOutputStream", "BufferedReader", "BufferedWriter", "PrintWriter", "Random", "Socket", "ServerSocket", "URLConnection", "URL", "DateFormat", "SimpleDateFormat", "Locale", "TimeZone", "Thread", "ThreadGroup", "Runnable", "Callable", "Future", "Executor", "Executors", "ExecutorService", "ScheduledExecutorService", "TimeUnit", "AtomicInteger", "AtomicLong", "AtomicBoolean", "CountDownLatch", "CyclicBarrier", "Semaphore", "ReentrantLock", "Lock", "ReadWriteLock", "Condition", "ConcurrentHashMap", "HashMap", "Hashtable", "HashSet", "TreeMap", "TreeSet", "LinkedList", "PriorityQueue", "ArrayDeque", "Stack", "Queue", "Deque", "List", "Set", "Map", "Collection", "Iterator", "Enumeration", "Comparable", "Comparator", "Iterable", "Cloneable", "Serializable"];
  
  var topWords = ["alignas", "alignof", "and", "and_eq", "asm", "auto", "bitand", "bitor", "bool", "break", "case", "catch", "char", "char8_t", "char16_t", "char32_t", "class", "compl", "const", "consteval", "constexpr", "const_cast", "continue", "co_await", "co_return", "co_yield", "decltype", "default", "delete", "do", "double", "dynamic_cast", "else", "enum", "explicit", "export", "extern", "false", "float", "for", "friend", "goto", "if", "inline", "int", "long", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "private", "protected", "public", "register", "reinterpret_cast", "requires", "return", "short", "signed", "sizeof", "static", "static_assert", "static_cast", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "true", "try", "typedef", "typeid", "typename", "union", "unsigned", "using", "virtual", "void", "volatile", "wchar_t", "while", "xor", "xor_eq", "std::vector", "std::string", "std::cout", "std::cin", "std::endl", "std::sort", "std::find", "std::stoi", "std::to_string"];

  var basicWords = ['and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'False', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'None', 'not', 'or', 'pass', 'raise', 'return', 'True', 'try', 'while', 'with', 'yield', 'abs()', 'all()', 'any()', 'bin()', 'chr()', 'complex()', 'dict()', 'enumerate()', 'filter()', 'float()', 'format()', 'getattr()', 'hash()', 'input()', 'int()', 'isinstance()', 'len()', 'list()', 'map()', 'max()', 'min()', 'next()', 'open()', 'ord()', 'pow()', 'print()', 'range()', 'repr()', 'reversed()', 'round()', 'set()', 'setattr()', 'sorted()', 'str()', 'sum()', 'tuple()', 'type()', 'zip()'];
  
  if(diff==1){
    wordArray = basicWords;
  }
  else if(diff==2){
    wordArray =topWords;
  }else{
    wordArray = expertWords;
  }

  var selectedWords = [];
  for(var i=0;i<40;i++){
    var randomNumber = Math.floor(Math.random()*wordArray.length);
    selectedWords.push(wordArray[randomNumber]+" ");
  }
  return selectedWords;
}
console.log(myData);
