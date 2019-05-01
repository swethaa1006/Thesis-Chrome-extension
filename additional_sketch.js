
function setup(){
}

//function to shift baseline
function replacerBaslineShift1(str) {
var s;
  var words = str.split(" ");
  str = "";
  for (var i = 0; i < words.length; i++) {
    if (i % 2 == 0) {
    s  = paragraphStyle(words[i]);
    if (s.length>0) {
      words[i] = "<bdo10 style= 'vertical-align:25px; font-size:120%; line-height:40px;color:rgb(0,0,0);text-transform: uppercase;font-weight: bold;'>" + words[i] + "</bdo10>"
    }else {
      words[i] = "<bdo10 style= 'vertical-align:25px; font-size:120%; line-height:40px;color:rgb(0,0,0);'>" + words[i] + "</bdo10>"
    }
    }else {
      s  = paragraphStyle(words[i]);
      if (s.length>0) {
        words[i] = "<bdo10 style= 'vertical-align:25px; font-size:120%; line-height:40px;color:rgb(0,0,0);text-transform: uppercase;font-weight: bold;'>" + words[i] + "</bdo10>"
      }else {
        words[i] = "<bdo10 style= 'font-size:120%;line-height:40px;color:rgb(0,0,0);'>" + words[i] + "</bdo10>"

      }
    }
    words[i] += " ";
    str += words[i];
  }
  return str;
}

function replaceSpace(str){
  var res = "";
  var strRes = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    console.log(strRes[i]);
    var x = random(-10,50);
    if (strRes[i]!=undefined) {
      res+="<bdo style='letter-spacing:"+x+"px;'>"+strRes[i]+"</bdo>"
      res+=" ";
    }
    // num+=0.01;
  }
  return res;
}

function replaceSkew1(str){
  var res = "";
  var strRes = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    console.log(strRes[i]);
    if (strRes[i]!=undefined) {
      res+="<div class='' style='margin-bottom:9px;float: left; transform:skew(15deg, 15deg); color:rgb(0,0,0); width:50px;'>"+strRes[i]+"</div>"
      res+=" ";
    }
    // num+=0.01;
  }
  return res;
}

function replaceSkew(str){
  var res = "";
  var strRes = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    console.log(strRes[i]);
    if (strRes[i]!=undefined) {
      res+="<div class='' style='margin-right:9px; margin-bottom:9px; float: left; transform:skew(15deg, 15deg); color:rgb(0,0,0) width:50px;'>"+strRes[i]+"</div>"
      res+=" ";
    }
    // num+=0.01;
  }
  return res;
}
  var num1 = 0.01;
function replaceBlur(str){
  if (str.length>0) {
    console.log(num1);
    var res = "";
    var strRes = str.split(" ");
    for (var i = 0; i < strRes.length; i++) {
      res+="<bdo4 style='font-size:18px; filter:blur("+num1+"px); color:rgb(0, 0, 0);'>"+strRes[i]+"</bdo4>";
      res+=" ";
      num1+=0.01;
    }
  }

console.log(res);
  return res;
}
function circleText(str){
  var res = "";
  var num = 4.5;
  num=random(4,15);

if (str.length>0) {
  res = "<svg viewBox='0 0 150 150'><circle r='48' cx='50' cy='50'/><foreignObject id='text1' width='100' height='100'><div class='shape shape-left'></div>  <div class='shape shape-right'></div><div class='text1' style='font-size:"+num+"px;color: rgb(0,0,0);'>"+str+"</div>  </foreignObject></svg>"

}
return res;

}


//function to create triangle patterns
function replacerTri(str){
  x1 = int(random(350,600));
  x=int(random(0,250));
  res="<svg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'> <path id='MyPath' fill='none' stroke='none' d='M"+x1+","+x1+" l100,0 l-50,-100 l-150,150 l300,0 l-150,-250 l-250,300 l500,0 l-250,-400 l-350,450 l700,0' /><text><textPath href='#MyPath'style='font-size:120%;fill: rgb(0,0,0);'>"+str+"</textPath></text></svg>"
  return res;

}


//function to create circle patterns
function replacerCir(str){
  x1 = int(random(350,600));
  x=int(random(0,250));
  res="<svg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'> <path id='MyPath' fill='none' stroke='none' d='M"+x1+","+x1+" a 25,25 0 1,0 50,0 a 50,50 0 1,0 -100,0 a 75,75 0 1,0 150,0 a 100,100 0 1,0 -200,0 a 125,125 0 1,0 250,0 a 150,150 0 1,0 -300,0 a 175,175 0 1,0 350,0 a 200,200 0 1,0 -400,0 a 225,225 0 1,0 450,0' /><text><textPath href='#MyPath'style='font-weight: 900;font-size:76px;fill: rgb(0,0,0);'>"+str+"</textPath></text></svg>"
  return res;

}


//function to create circle patterns
function replacer_MultipleCir(str){
    var res = "";
  if (str.length>0) {
      res="<svg viewBox='0 0 1000 700' xmlns='http://www.w3.org/2000/svg'> <path id='MyPath' fill='none' stroke='none' d='M 200, 350  a 300,300 0 1,0 600,0 a 300,300 0 1,0 -600,0 z ' /><text><textPath href='#MyPath'style='font-size:50px;fill: rgb(0,0,0);'>"+(str.substr(0,86))+"</textPath></text> <path id='MyPath1' fill='none' stroke='none' d='M 300, 350  a 200,200 0 1,0 400,0 a 200,200 0 1,0 -400,0 z ' /><text><textPath href='#MyPath1'style='font-size:40px; fill: rgb(0,0,0);'>"+(str.substr(86,72))+"</textPath></text> <path id='MyPath2' fill='none' stroke='none' d='M375,350 a 125,125 0 1,0 250,0 a 125,125 0 1,0 -250,0 z ' /><text><textPath href='#MyPath2'style='font-size:30px; fill: rgb(0,0,0);'>"+(str.substr((86+72),66))+"</textPath></text><path id='MyPath3' fill='none' stroke='none' d='M425,350 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0 z ' /><text><textPath href='#MyPath3'style='font-size:20px; fill: rgb(0,0,0);'>"+(str.substr((86+72+66),56))+"</textPath></text><path id='MyPath4' fill='none' stroke='none' d='M460,350 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0 z ' /><text><textPath href='#MyPath4'style='font-size:12px; fill: rgb(0,0,0);'>"+(str.substr((86+72+66+56),56))+"</textPath></text></svg>"
  }
  console.log(str.length,res);

    return res;
}


//function to create square patterns
function replacer_MultipleSqr(str){
    var res = "";
  if (str.length>0) {
    res="<svg viewBox='0 0 1000 600' xmlns='http://www.w3.org/2000/svg'> <path id='MyPath' fill='none' stroke='none' d='M50,50 l800,0 l0,500 l-800,0 l0,-500 z ' /><text><textPath href='#MyPath'style='font-size:50px;fill: rgb(0,0,0);'>"+(str.substr(0,116))+"</textPath></text> <path id='MyPath1' fill='none' stroke='none' d='M150,150 l600,0 l0,300 l-600,0 l0,-300 z ' /><text><textPath href='#MyPath1'style='font-size:40px; fill: rgb(0,0,0);'>"+(str.substr(116,168))+"</textPath></text> <path id='MyPath2' fill='none' stroke='none' d='M225,225 l450,0 l0,150 l-450,0 l0,-150 z ' /><text><textPath href='#MyPath2'style='font-size:30px; fill: rgb(0,0,0);'>"+(str.substr((116+168),91))+"</textPath></text><path id='MyPath3' fill='none' stroke='none' d='M275,275 l350,0 l0,50 l-350,0 l0,-50 z ' /><text><textPath href='#MyPath3'style='font-size:20px; fill: rgb(0,0,0);'>"+(str.substr((116+168+91),90))+"</textPath></text><path id='MyPath4' fill='none' stroke='none' d='M320,300 l260,0 l0,3 l-260,0 l0,-3 z' /><text><textPath href='#MyPath4'style='font-size:10px; fill: rgb(0,0,0);'>"+(str.substr((116+168+91+90),190))+"</textPath></text></svg>"
  }
  console.log(str.length,res);

    return res;
}



//function to create random size words
function replace_Word_Size(str){

  var res = "";
  var strRes = str.split(" ");
  console.log(strRes);
  for (var i = 0; i < strRes.length; i++) {
    res+="<bdo4 style='font-family: Helvetica;font-size:"+(int(random(8,30)))+"px;color:rgb(0,0,0);'>"+strRes[i]+"</bdo4>";
    res+=" ";
  }
console.log(res);
  return res;
}

//function to create change size patterns
var x=0;
var s = 14;
var num = 0;
function replacer_fontsize(str){
  var x=0;
  var s = 14;
  var num = 0;
  var res = "";
  x=0;
  var y = 44;
  for (var i = 0; i < str.length; i++) {
  console.log(x, str.length);
  res+="<div style='transform: rotateY(-160deg);font-family:Helvetica; font-size:"+s+"px;color:rgb(0,0,0);'>"+(str.substr(x,44))+"</div>";
    if (x>= str.length) {
  break;
} else {
    x+=44;
    if(num<5) {
      s+=2.8;
      num++;
    }else if(num<=10) {
      s-=2.8;
      num++;
    if (num >=10) {  num = 0;}
    }
}
}
console.log(s,num,res);
  return res;
}

//function to create tan patterns
var x=0;
function replace_tan(str){
  console.log("size");

  var res = "";
  x=0;
  var y =221;
  for (var i = 0; i < str.length; i++) {
    console.log(x, str.length,y);
    if (x<str.length) {
      if(y<=str.length){ y = str.length}
    res+="<svg viewBox='0 110 1000 110' xmlns='http://www.w3.org/2000/svg'style= 'width: 100%;'> <path id='MyPath' fill='none' stroke='none' d='M30,180 l0,-30 l60,0 l0,60 l60,0 l0,-60 l60,0 l0,60 l60,0 l0,-60 l60,0 l0,60 l60,0 l0,-60 l60,0 l0,60 l60,0 l0,-60 l60,0 l0,60 l60,0 l0,-60 l60,0 l0,60 l60,0 l0,-60 l60,0 l0,60 l60,0 l0,-60 l60,0 l0,60 l60,0 l0,-60 ' /><text><textPath href='#MyPath'style='fill: rgb(0,0,0);'>"+(str.substring(x,y))+"</textPath></text></svg>"
    x+=221;
    }else if (x >= str.length) {
    break;
}
}
  return res;
}

//function to create sine patterns
var x=0;
function replacercircle1(str){
  var res = "";
  x=0;
  var y =105;
    var alter = 30;
    for (var i = 0; i < str.length; i++) {
      if (i%2==0) {
        res+="<svg viewBox='0 105 1200 120' xmlns='http://www.w3.org/2000/svg' style= 'width: 100%;'> <path id='MyPath' fill='none' stroke='none' d='M10,180 c50,-50 100,-50 150,0 c50,50 100,50 150,0 c50,-50 100,-50 150,0 c50,50 100,50 150,0 c50,-50 100,-50 150,0c50,50 100,50 150,0 c50,-50 100,-50 150,0' /><text style='transform:skew("+alter+"deg);'><textPath href='#MyPath'style='fill: rgb(0,0,0);'>"+(str.substr(x,105))+"</textPath></text></svg>"
      } else {
        res+="<svg viewBox='-140 105 1200 120' xmlns='http://www.w3.org/2000/svg' style= 'width: 100%;'> <path id='MyPath' fill='none' stroke='none' d='M10,180 c50,-50 100,-50 150,0 c50,50 100,50 150,0 c50,-50 100,-50 150,0 c50,50 100,50 150,0 c50,-50 100,-50 150,0c50,50 100,50 150,0 c50,-50 100,-50 150,0' /><text style='transform:skew("+(alter-25)+"deg);'><textPath href='#MyPath'style='fill: rgb(0,0,0);'>"+(str.substr(x,105))+"</textPath></text></svg>"
      }
      console.log(str.substr(x,105));
      x=y;
      y+=y;
      if (y>=str.length) {
        y=str.length;
      }
      if (x>=str.length) {
        break;
      }
      console.log(x,y);
         alter = alter*-1;
    }
//     if (x<str.length) {
//       if(y<=str.length){ y = str.length}
//     // res+="<svg viewBox='0 110 1000 110' xmlns='http://www.w3.org/2000/svg' style= 'width: 100%;'> <path id='MyPath' fill='none' stroke='none' d='M10,180 c50,-50 100,-50 150,0 c50,50 100,50 150,0 c50,-50 100,-50 150,0 c50,50 100,50 150,0 c50,-50 100,-50 150,0c50,50 100,50 150,0 c50,-50 100,-50 150,0' /><text><textPath href='#MyPath'style='font-size:20px;'>"+(str.substring(x,y))+"</textPath></text></svg>"
//     x+=125;
//     }else if (x >= str.length) {
//     // break;
// }

  return res;
}

//function to create square patterns
function replacerSqr(str){
  var res = "";
  // x1 = int(random(0,250));
  x1 = 250;
  var x=0;
  var y = 141;
  // x=x+int(random(8,15));
for (var i = 0; i < str.length; i++) {
  res+="<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'> <path id='MyPath' fill='none' stroke='none' d='M"+x1+","+x1+" l50,0 l0,-50 l-100,0 l0,100 l150,0 l0,-150 l-200,0 l0,200 l250,0 l0,-250 l-300,0 l0,300 l350,0 l0,-350 l-400,0 l0,400 l450,0 l0,-450 l-500,0 l0,500' /><text><textPath href='#MyPath'style='font-size: 80%; fill: rgb(0,0,0);'>"+str.substr(x,141)+"</textPath></text></svg>"
x=y;
y+=y;
if (y>=str.length) {
  y=str.length;
}
if (x>=str.length) {
  break;
}
}

  // res="<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'style='margin:60%;'> <path id='MyPath' fill='none' stroke='none' d='M"+x1+","+x1+" l50,0 l0,-50 l-100,0 l0,100 l150,0 l0,-150 l-200,0 l0,200 l250,0 l0,-250 l-300,0 l0,300 l350,0 l0,-350 l-400,0 l0,400 l450,0 l0,-450 l-500,0 l0,500' /><text><textPath href='#MyPath'style='font-size: 330%;'>"+str.substr(0,141)+"</textPath></text></svg>"
  return res;
}
//function to change char case
function replacerCharheight(str){
  console.log("boo ya");
  var res = "";
    var rand = 0;
    var x = 1;
  for (var i = 0; i < str.length; i++) {
    if ((str.charAt(i))==" ") {
      res += str.charAt(i);
    } else if (rand<50) {
      var c = str.charAt(i).toUpperCase();
      res += "<bdo10 style='font-size:"+x+"px; color:rgb(0,0,0);'>"+c+"</bdo10>"
      rand++;
      x+=1;
    // }else if ((rand>=64)&&(rand<128)) {
    //   var c = str.charAt(i).toUpperCase();
    //   res += "<bdo10 style='font-size:"+x+"px;color:rgb(0,0,0);'>"+c+"</bdo10>"
    //   x-=4;
    //   rand++;
    }
    if (rand==50) {
      rand=0;
      x=1;
    }
  }
  res = "<bdo10 style='font-family: helvetica;line-height:43px;'>"+res+"</bdo10>"
    console.log("hello",res);
  return res;
}

//function to change char case
function replacerCharheight1(str){

  var res = "";
    var rand = 0;
    var x = 4;
  for (var i = 0; i < str.length; i++) {
    if ((str.charAt(i))==" ") {
      res += str.charAt(i);
    } else if (rand<8) {
      var c = str.charAt(i).toUpperCase();
      res += "<bdo10 style='font-size:"+x+"px; color:rgb(0,0,0);'>"+c+"</bdo10>"
      rand++;
      x+=4;
    }else if ((rand>=8)&&(rand<16)) {
      var c = str.charAt(i).toUpperCase();
      res += "<bdo10 style='font-size:"+x+"px;color:rgb(0,0,0);'>"+c+"</bdo10>"
      x-=4;
      rand++;
    }
    if (rand==16) {
      rand=0;
      x=4;
    }
  }
  res = "<bdo10 style='font-family: helvetica;line-height:43px;'>"+res+"</bdo10>"
    // console.log("hello",res);
  return res;
}

//function to create wave
function replacerCharBaseline(str){

  var res = "";
    var y = 0;
    var y1 = 1;
  for (var i = 0; i < str.length; i++) {
    if ((str.charAt(i))==" ") {
      res += str.charAt(i);
    }else {
      res += "<bdo11 style = 'vertical-align:"+y+"px;letter-spacing: 10px; color:rgb(0,0,0);'>"+str.charAt(i)+"</bdo11>"
    }
      if ((y==-25)&&(y1==-20)) {
        y1=y;
        y+=5;
      } else if ((y==25)&&(y1==20)) {
        y1=y;
        y-=5;
      }
       if (((y >= 20)||(y>=-20))&&(y1>y)) {
         y1=y;
        y-=5;
      } else if (((y >= -20)||(y<25))&&(y1<y)) {
        y1=y;
        y+=5;
      }
  }

  return res;
}

//function to change char case
function replacerCharCase(str){
  var res = "";
  res =   paragraphStyle(res);
  for (var i = 0; i < str.length; i++) {
    var rand = int(random(1,8));
   if ((str.charAt(i))==" ") {
      res += str.charAt(i);
    }else if ((i%rand) == 0) {
      res += str.charAt(i).toUpperCase();
    } else if ((i%rand) > 0) {
      var c = str.charAt(i).toLowerCase();

      res += "<bdo10 style='font-weight: 900; font-size: 120%;color:rgb(0,0,0);'>"+c+"</bdo10>"
    }
  }
  res = "<bdo10 style='font-family: helvetica; font-size: 120%;color:rgb(0,0,0);'>"+res+"</bdo10>"

  return res;
}

//function to shift baseline
function replacerBaslineShift(str) {
var s;
  var words = str.split(" ");
  str = "";
  for (var i = 0; i < words.length; i++) {
    if (i % 2 == 0) {
    s  = paragraphStyle(words[i]);
    if (s.length>0) {
      words[i] = "<bdo10 style= 'vertical-align:20px; font-size:160%; line-height:60px;color:rgb(0,0,0);text-transform: uppercase;font-weight: bold;'>" + words[i] + "</bdo10>"
    }else {
      words[i] = "<bdo10 style= 'vertical-align:20px; font-size:160%; line-height:60px;color:rgb(0,0,0);'>" + words[i] + "</bdo10>"
    }
    }else {
      s  = paragraphStyle(words[i]);
      if (s.length>0) {
        words[i] = "<bdo10 style= 'vertical-align:20px; font-size:160%; line-height:60px;color:rgb(0,0,0);text-transform: uppercase;font-weight: bold;'>" + words[i] + "</bdo10>"
      }else {
        words[i] = "<bdo10 style= 'font-size:120%;line-height:40px;color:rgb(0,0,0);'>" + words[i] + "</bdo10>"

      }
    }
    words[i] += " ";
    str += words[i];
  }
  return str;
}

//function for adding producers color
function replacer_color(match) {
  match = "<bdo14 style='font-weight: bold'>" + match + "</bdo14>"
  return match;
  match = "";
}

//function to add bold text
function replacerBold(match) {
  match = "<bdo10 style='text-transform: uppercase;font-weight: bold;'>" + match + "</bdo10>"
  return match;
  match = "";
}

// function for adding design styling
function replacerDes(match) {
  var match2 = createSpan('');
  match2.html("<bdo1>" + match + "</bdo1>" + "<repeat1>" + match + "</repeat1>");
  match2.position(windowWidth / 4, windowHeight / 2);
}

//function for adding producers style
function replacer(match) {
  // var randomNum = int(random(1, 4));
  match = "<bdo1>" + match + "</bdo1>" + "<repeat1>" + match + "</repeat1>"
  return match;
  match = "";
}
