$(function(){
  console.log('Ready to begin the test...');

//Problem #2
  console.log('PROBLEM 2');
  function foo(){
    var msg = 'bah'; //put var before console log to fix function, added semicolon at end of brackets
    console.log(msg);
  };
  foo();

//Problem #8
  $('#burger').click(function(){
    console.log('clicked burger');
    $('#offscreen-nav').css({'display': 'block','width': 'auto','height': 'auto'});
  });

  $('#close').click(function(){
    console.log('clicked X');
    $('#offscreen-nav').css('display', 'none');
  });

//Problem #9
  console.log('PROBLEM 9');
  var student = {
    name:'Brenda',
    age:20,
    mood:'unhappy'
  }
  function meet(){
    if (student.mood = 'happy') {
      console.log ('hello!');
    } else if (student.mood = 'unhappy'){
      console.log ('bug off');
    }
  }
  console.log(student.name);
  meet();

//Problem #10 - couldn't solve.
  console.log('PROBLEM 10');
  function meetSteve(){ //function for meeting steve
    student.mood = 'unhappy'; //mood is now unhappy
    console.log(student.mood); //mood is logged as unhappy
    meet(); //but when meet function runs, it still acts as if student is happy
  }
  meetSteve();

//Problem #12
  console.log('PROBLEM 12');
  var num1 = 7
  var num2 = 8
  function multi(){
    var product = num1 * num2
    console.log(product)
  }
  multi();

//Problem #13 & #14
  console.log('PROBLEMS 13 & 14');
  var data = [];
  var url = 'js/nations.json';
  var html = '';
  $.ajax({
    type:'GET',
    dataType:'json',
    data: data,
    url: url,
    async:true,
    success: function(data){
      console.log(data);
      for (i = 0; i < data.length; i++){
        if (data[i].Airports > 400){
          html += data[i].name + ', ';
        }else{

        }
      }
      console.log(html);
      $('#main-top-panel').append(html);
    }
  });
});
