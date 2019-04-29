//This is code for google chrome extention that works on any website. 
//This was specifically made for my thesis content
//  http://elupton.com/2010/10/the-designer-as-producer/
//  https://swethaa1006.github.io/Content-1/
//  https://swethaa1006.github.io/Content-2/
//The keyCode 0-9, q,w,e,r,t,u,i,o,p,a,s,d and up and down arrow works.
//It also works on mouse press and pops up the print window 
// https://swethaa1006.github.io/MDes-Thesis/ is the introduction of my thesis.


var charCount = 0;
var paragraphsH1;
var paragraphsH6;
var paragraphsSpan;
var paragraphs_p;
var paragraphsH2;
var paragraphs_nav;
var a;
  var c1=0;
// setup function to fetch content
function setup() {

  console.log("Chrome extention ready to go boo ya?");
  noCanvas();
  colorMode(HSB);
  paragraphsH1 = document.getElementsByTagName('h1'); //fetching h1
  paragraphsDiv = document.getElementsByTagName('div'); //fetching h1
  paragraphsH2 = document.getElementsByTagName('h2'); //fetching h2
  paragraphsH6 = document.getElementsByTagName('h6'); //fetching h6
  paragraphsSpan = document.getElementsByTagName('span'); //fetching span
  paragraphs_p = document.getElementsByTagName('p'); //fetching p
  paragraphs_nav = document.getElementById('masthead'); //fetching masthead
  var links = document.getElementsByTagName("link"); //fetching link to change media to all
  paragraphsH3 = document.getElementsByTagName('h3'); //fetching h3
  paragraphsul = document.getElementsByTagName('ul'); //fetching ul
  paragraphsli = document.getElementsByTagName('li') //fetching li
  a = document.getElementsByTagName('a')
  var windwUrl = window.location.href;


  for (i in links) {
var x = links[i];
// console.log(links[i].getAttribute('href'));
if (links[i].hasAttribute('media')==true) {
  var media = links[i].getAttribute('media');
  console.log(links[i],links[i].getAttribute('media'));
  if ((media!=null)&&(media.includes("screen"))) {
    var href = links[i].setAttribute('media', 'all'); //to remove preexisting print settings
    break;
  }
}

}
  }

// keypressed function for print action to happen
function keyPressed() {
  var c = checkContent();

 if ((c1>0)||(c.length>0)) {
    console.log("true",c);
    c1++;
  var windwUrl = window.location.href;
  var n = windwUrl.endsWith(".pdf");
  if (n == true) {

  } else if (n != true) {

    if (document.getElementById("nav")) {
      document.getElementById("nav").style.visibility = "hidden";
    }
    if (document.getElementById("mainColumn")) {
      document.getElementById("mainColumn").style.border = "0px solid #ddd";
    }
    if (document.getElementById("intro")) {
      document.getElementById("intro").style.border = "0px solid #ddd";
    }
    if (document.getElementById("footer")) {
      document.getElementById("footer").style.border = "0px solid #ddd";
      console.log(document.getElementById("footer"));
    }
      var x = 1;
    // for loop for p tag
    if (keyCode === DOWN_ARROW) {                                               // DOWN_ARROW-done
      var x = int(random(1, 3));
      if (x==1) {
        x++;
      } else {
        x=1;
      }
      //add other words
      for (elt of paragraphsH2) {
        s = paragraphStyle(s);
        elt.classList.add("col-" + x);
        elt.outerHTML = "<div style='color: rgb(0,0,0);'>"+s+"</div>";
      }
      for (elt of a) {
        s = paragraphStyle(s);
        elt.classList.add("col-" + x);
        elt.outerHTML = "<div style='color: rgb(0,0,0);'>"+s+"</div>";
      }
      for (elt of paragraphsH3) {
        s = paragraphStyle(s);
        elt.outerHTML = "<div style='color: rgb(0,0,0);'>"+s+"</div>";
        elt.classList.add("col-" + x);
      }
      for (elt of paragraphsH6) {
        s = paragraphStyle(s);
        elt.classList.add("col-" + x);
        elt.outerHTML = "<div style='color: rgb(0,0,0);'>"+s+"</div>";
      }
      for (elt of paragraphsSpan) {
        s = paragraphStyle(s);
        elt.classList.add("col-" + x);
        elt.outerHTML = "<div style='color: rgb(0,0,0);'>"+s+"</div>";
      }
      for (elt of paragraphsli) {
        s = paragraphStyle(s);
        elt.classList.add("col-" + x);
        elt.outerHTML = "<div style='color: rgb(0,0,0);'>"+s+"</div>";
      }
      charCount = 0;

        if(windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/"){ charCount=1}
      for (elt of paragraphs_p) {
        var s = elt.innerText;
        if (charCount > 0) {
          s1 = paragraphStyle(s);
          if (s1.length>0) {
            elt.innerHTML = "<div class='col-"+x+"' style='color: rgb(0,0,0);'>"+s1+"</div>";
          }else if (s1.length == 0) {
            elt.innerHTML = "<div class='col-"+x+"' style='color: rgb(0,0,0);'>"+s+"</div>";
          }
        } else if (charCount == 0) {
          var s = "";
              elt.innerHTML = s;
        }
        charCount++;
        if (x==1) {
            x++;
          } else {
            x=1;
          }
      }
    }if (keyCode === UP_ARROW) {                                                 //UP_ARROW-done
      //add other words
      charCount = 0;
      var num = 0;
      // if(windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/"){ charCount=1}
      for (elt of paragraphs_p) {
        if (charCount > 0) {
          var s = "";
          s = elt.innerText;
          s = paragraphStyle(s);
          if (s.length > 0) {
            console.log(s);
            //elt.style['color'] = 'rgb(222,8,255)';
            if (num%2==0) {
              elt.style['letter-spacing'] = '90px';
            }else {
              elt.style['letter-spacing'] = '45px';
            }
            elt.style['line-height'] = '45px';
            elt.style['font-size'] = '200%';
          }
        } else if (charCount == 0) {
          var s = "";

          charCount++;
        }
        elt.innerHTML = s;

      }
      for (elt of paragraphsH1) {
        s = elt.innerText;
        s = paragraphStyle(s);
        if (s.length > 0) {
          console.log(s);
          //elt.style['color'] = 'rgb(222,8,255)';
          elt.style['letter-spacing'] = '90px';
          elt.style['line-height'] = '45px';
          elt.style['font-size'] = '200%';
          elt.innerHTML = s;
        } else if (s.length == 0) {
          elt.style['letter-spacing'] = '0px';
        }
      }
      if(windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/"){
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = paragraphStyle(s);
        console.log(s.length);
        if (s.length > 0) {
          console.log(s);
          //elt.style['color'] = 'rgb(222,8,255)';
          elt.style['line-height'] = '45px';
          elt.style['font-size'] = '200%';
          elt.style['letter-spacing'] = '90px';
          elt.innerHTML = s;
        } else if (s.length == 0) {
          elt.style['letter-spacing'] = '0px';
        }
      }
    }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = paragraphStyle(s);
        if (s.length > 0) {
          console.log(s);
          //elt.style['color'] = 'rgb(222,8,255)';
          elt.style['font-size'] = '200%';
          elt.style['line-height'] = '45px';
          elt.style['letter-spacing'] = '90px';
          elt.innerHTML = s;
        } else if (s.length == 0) {
          elt.style['letter-spacing'] = '0px';
        }
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        s = paragraphStyle(s);
        if (s.length > 0) {
          console.log(s);
          //elt.style['color'] = 'rgb(222,8,255)';
          elt.style['font-size'] = '200%';
          elt.style['line-height'] = '45px';
          elt.style['letter-spacing'] = '90px';
          elt.innerHTML = s;
        } else if (s.length == 0) {
          elt.style['letter-spacing'] = '0px';
        }
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = paragraphStyle(s);
        if (s.length > 0) {
          console.log(s);
          //elt.style['color'] = 'rgb(222,8,255)';
          elt.style['font-size'] = '200%';
          elt.style['line-height'] = '45px';
          elt.style['letter-spacing'] = '90px';
          elt.innerHTML = s;
        } else if (s.length == 0) {
          elt.style['letter-spacing'] = '0px';
        }
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = paragraphStyle(s);
        if (s.length > 0) {
          console.log(s);
          //elt.style['color'] = 'rgb(222,8,255)';
          elt.style['font-size'] = '200%';
          elt.style['line-height'] = '45px';
          elt.style['letter-spacing'] = '90px';
          elt.innerHTML = s;
        } else if (s.length == 0) {
          elt.style['letter-spacing'] = '0px';
        }
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = paragraphStyle(s);
        if (s.length > 0) {
          console.log(s.length);
          // 'rgb(222,8,255)';
          elt.style['line-height'] = '45px';
          elt.style['font-size'] = '200%';
          elt.style['letter-spacing'] = '90px';
          elt.innerHTML = s;
        } else if (s.length == 0) {
          elt.style['letter-spacing'] = '0px';
        }
      }
    } else if (keyCode === 49) {                                                //KEYCODE FOR 1-done
      var num = random(0,180);
      s = elt.innerText;
      s = paragraphStyle(s);
      for (elt of paragraphsH1) { //add other words
        elt.style['transform'] = 'rotate('+num+'deg)';
        elt.style['margin-top'] = '350px';
        elt.style['font-size'] = '120%';
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.innerHTML = s;
      }
      if(windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/"){
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = paragraphStyle(s);
        elt.style['transform'] = 'rotate('+num+'deg)';
        elt.style['font-size'] = '120%';
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.innerHTML = s;
      }
    }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = paragraphStyle(s);
        elt.style['transform'] = 'rotate('+num+'deg)';
        elt.style['font-size'] = '120%';
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        s = paragraphStyle(s);
        elt.style['margin-top'] = '350px';
        elt.style['transform'] = 'rotate('+num+'deg)';
        elt.style['font-size'] = '120%';
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = paragraphStyle(s);
        elt.style['transform'] = 'rotate('+num+'deg)';
        elt.style['font-size'] = '120%';
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = paragraphStyle(s);
        elt.style['transform'] = 'rotate('+num+'deg)';
        elt.style['font-size'] = '120%';
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = paragraphStyle(s);
        elt.style['transform'] = 'rotate('+num+'deg)';
        elt.style['font-size'] = '120%';
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.innerHTML = s;
      }
      charCount = 0;
      if(windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/"){ charCount=1}
      for (elt of paragraphs_p) {
        if (charCount > 0) {
          s = elt.innerText;
          s = paragraphStyle(s);
          elt.style['transform'] = 'rotate('+num+'deg)';
          elt.style['line-height'] = '28px';
          elt.style['font-size'] = '120%';
          elt.style['margin-bottom'] = '60px';
          ////elt.style['color'] = 'rgb(0,255,0)';
        } else if (charCount == 0) {
          var s = " ";
          elt.innerHTML = s;
          charCount++;
        }
        elt.innerHTML = s;
      }
    } else if (keyCode === 50) {                                                //KEYCODE FOR 2-done
      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replacerBaslineShift(s);
        elt.innerHTML = s;
      }
      if(windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/"){
        for (elt of paragraphsDiv) {
          s = elt.innerText;
          s = replacerBaslineShift(s);
          elt.innerHTML = s;
        }
    }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replacerBaslineShift(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        s = replacerBaslineShift(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replacerBaslineShift(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replacerBaslineShift(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replacerBaslineShift(s);
        elt.innerHTML = s;
      }
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replacerBaslineShift(s);
        } else if (charCount == 0) {
          var s = "";
        }
        elt.innerHTML = s;
        charCount++;
      }
    } else if (keyCode === 51) {                                                //KEYCODE FOR 3-done
      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replacerCharCase(s);
        elt.innerHTML = s;
      }
      if(windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/"){
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = replacerCharCase(s);
        elt.innerHTML = s;
      }
    }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replacerCharCase(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        s = replacerCharCase(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replacerCharCase(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replacerCharCase(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replacerCharCase(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replacerCharCase(s);
        } else if (charCount == 0) {
          var s = "";
        }
        elt.innerHTML = s;
        charCount++;
      }
    } else if (keyCode === 52) {                                                //KEYCODE FOR 4-done
      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replacerCharBaseline(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = replacerCharBaseline(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replacerCharBaseline(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        s = replacerCharBaseline(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replacerCharBaseline(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replacerCharBaseline(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replacerCharBaseline(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replacerCharBaseline(s);
        } else if (charCount == 0) {
          var s = "";
        }
        elt.innerHTML = s;
        charCount++;
      }


    } else if (keyCode === 53) {                                                //KEYCODE FOR 5-done
      if (document.getElementById("mainColumn")) {
        document.getElementById("mainColumn").style.width = "1000px";
        document.getElementById("mainColumn").style.margin = "0px"
      }
      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerSqr(s);
        elt.innerHTML = s;
      }
      if((windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/")||(c1>=2)){
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerSqr(s);
        elt.innerHTML = s;
      }
    }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerSqr(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerSqr(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerSqr(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerSqr(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerSqr(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {

          s = replacerSqr(s);
        } else if (charCount == 0) {
          var s = "";
        }
        if (s.length>0) {
          elt.classList.add("rotate");
        }
        elt.innerHTML = s;
        charCount++;
      }
    } else if (keyCode === 54) {                                                //KEYCODE FOR 6-done

      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replacerCharheight(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = replacerCharheight(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replacerCharheight(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        s = replacerCharheight(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replacerCharheight(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replacerCharheight(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replacerCharheight(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replacerCharheight(s);
        } else if (charCount == 0) {
          var s = "";
        }
        elt.innerHTML = s;
        charCount++;
      }
    } else if (keyCode === 55) {                                                //KEYCODE FOR 7-done
      if (document.getElementById("mainColumn")) {
        document.getElementById("mainColumn").style.width = "1000px";
        document.getElementById("mainColumn").style.margin = "0px"
      }
      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replacercircle1(s);
        elt.innerHTML = s;
      }
      if((windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/")||(c1>=2)){
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = replacercircle1(s);
        elt.innerHTML = s;
      }
    }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replacercircle1(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        s = replacercircle1(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replacercircle1(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replacercircle1(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replacercircle1(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
        console.log(s);
          s = replacercircle1(s);
        } else if (charCount == 0) {
          var s = "";
        }
        elt.classList.add("rotate1");
        elt.innerHTML = s;
        charCount++;
      }
    } else if (keyCode === 56) {                                                 //KEYCODE FOR 8-done
      if (document.getElementById("mainColumn")) {
        document.getElementById("mainColumn").style.width = "1000px";
        document.getElementById("mainColumn").style.margin = "0px"
      }
      if((windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/")||(c1>=2)){
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = replace_tan(s);
        elt.innerHTML = s;
      }
    }
      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replace_tan(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replace_tan(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        s = replace_tan(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replace_tan(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replace_tan(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replace_tan(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replace_tan(s);
        } else if (charCount == 0) {
          var s = "";
        }
        // s = paragraphStyle(s);
        elt.innerHTML = s;
        charCount++;
      }
    } else if (keyCode === 57) {                                                //KEYCODE FOR 9-done

      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replacer_fontsize(s);
        elt.innerHTML = s;
      }
      if((windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/")||(c1>=200)){
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = replacer_fontsize(s);
        elt.innerHTML = s;
      }
    }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replacer_fontsize(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        s = replacer_fontsize(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replacer_fontsize(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replacer_fontsize(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replacer_fontsize(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replacer_fontsize(s);
        } else if (charCount == 0) {
          var s = "";
        }
        elt.innerHTML = s;
        charCount++;
      }
    } else if (keyCode === 48) {                                                 //KEYCODE FOR 0-done

      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replace_Word_Size(s);
        elt.innerHTML = s;
      }
      if((windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/")||(c1>=2)){
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = replace_Word_Size(s);
        elt.innerHTML = s;
      }
      }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replace_Word_Size(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        s = replace_Word_Size(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replace_Word_Size(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replace_Word_Size(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replace_Word_Size(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replace_Word_Size(s);
        } else if (charCount == 0) {
          var s = "";
        }
        elt.innerHTML = s;
        charCount++;
      }
    } else if (keyCode === 81) {                                                //KEYCODE FOR q-done
      if((windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/")||(c1>=2)){
      for (elt of paragraphsDiv) {
        var x = random(-50, 50); //add other words
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.style['transform'] = 'translate(' + x + 'px,0px)';
      }
    }
      for (elt of paragraphsH1) {
        var x = random(1, 500); //add other words
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.style['transform'] = 'translate(' + x + 'px,0px)';
      }

      for (elt of paragraphsH2) {
        var x = random(-500, 500); //add other words
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.style['transform'] = 'translate(' + x + 'px,0px)';
      }
      for (elt of paragraphsH3) {
        var x = random(-500, 500); //add other words
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.style['transform'] = 'translate(' + x + 'px,0px)';
      }
      for (elt of paragraphsH6) {
        var x = random(1, 500); //add other words
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.style['transform'] = 'translate(' + x + 'px,0px)';
      }
      for (elt of paragraphsSpan) {
        var x = random(1, 500); //add other words
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.style['transform'] = 'translate(' + x + 'px,0px)';
      }
      for (elt of paragraphsli) {
        var x = random(1, 500); //add other words
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.style['transform'] = 'translate(' + x + 'px,0px)';
      } //add other words
      for (elt of a) {
        var x = random(1, 500); //add other words
        ////elt.style['color'] = 'rgb(0,255,0)';
        elt.style['transform'] = 'translate(' + x + 'px,0px)';
      }
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if ((charCount > 0)&&(s.length>0)) {
          var x = random(-400, 500); //add other words
          ////elt.style['color'] = 'rgb(0,255,0)';
          elt.style['transform'] = 'translate(' + x + 'px,0px)';
        } else if (charCount == 0) {
          var s = " ";
          elt.innerHTML = s;
          charCount++;
        }

      }
    } else if (keyCode === 87) {                                                //KEYCODE FOR w-done

      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replacer_MultipleSqr(s);
        elt.innerHTML = s;
      }
      if((windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/")||(c1>=2)){
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = replacer_MultipleSqr(s);
        elt.innerHTML = s;
      }
    }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replacer_MultipleSqr(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        s = replacer_MultipleSqr(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replacer_MultipleSqr(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replacer_MultipleSqr(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replacer_MultipleSqr(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replacer_MultipleSqr(s);
        } else if (charCount == 0) {
          var s = "";
          charCount++;
        }
        elt.innerHTML = s;
      }

    } else if (keyCode === 69) {                                                //KEYCODE FOR e-done

      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replacer_MultipleCir(s);
        elt.innerHTML = s;
      }
      if((windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/")||(c1>=2)){
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = replacer_MultipleCir(s);
        elt.innerHTML = s;
      }
    }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replacer_MultipleCir(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        s = replacer_MultipleCir(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replacer_MultipleCir(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replacer_MultipleCir(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replacer_MultipleCir(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replacer_MultipleCir(s);
        } else if (charCount == 0) {
          var s = "";
        }
        charCount++;
        elt.innerHTML = s;
      }
    } else if (keyCode === 82) {                                                //KEYCODE FOR r-done
      if (document.getElementById("mainColumn")) {
        document.getElementById("mainColumn").style.width = "500px";
        document.getElementById("mainColumn").style.margin = "0px"
      }
      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replacerCir(s);
        // elt.classList.add("rotate");
        elt.innerHTML = s;
      }
      if((windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/")||(c1>=2)){
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = replacerCir(s);
        elt.classList.add("rotate");
        elt.innerHTML = s;
      }
    }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replacerCir(s);
        elt.classList.add("rotate");
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerCir(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerCir(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerCir(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerCir(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replacerCir(s);
        } else if (charCount == 0) {
          var s = "";
        }
        charCount++;
        elt.classList.add("rotate");
        elt.innerHTML = s;
      }
    } else if (keyCode === 84) { //KEYCODE FOR t-done
      if (document.getElementById("mainColumn")) {
        document.getElementById("mainColumn").style.width = "1000px";
        document.getElementById("mainColumn").style.margin = "0px"
      }
      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replacerTri(s);
        elt.classList.add("rotate");
        elt.innerHTML = s;
      }
      if((windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/")||(c1>=2)){
      for (elt of paragraphsDiv) {
        s = elt.innerText;
        s = replacerTri(s);
        elt.classList.add("rotate");
        elt.innerHTML = s;
      }
    }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replacerTri(s);
        elt.classList.add("rotate");
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerTri(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerTri(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerTri(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        elt.classList.add("rotate");
        s = replacerTri(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replacerTri(s);
        } else if (charCount == 0) {
          var s = "";
        }
        charCount++;
        elt.classList.add("rotate");
        elt.innerHTML = s;
      }
    // } else if (keyCode === 89) {                                                //KEYCODE FOR y-done
    //   if (document.getElementById("mainColumn")) {
    //     document.getElementById("mainColumn").style.width = "200px";
    //     document.getElementById("mainColumn").style.margin = "0px"
    //   }
    //
    //
    //   for (elt of paragraphsH1) { //add other words
    //     s = elt.innerText;
    //     s = circleText(s);
    //     // elt.classList.add("rotate");
    //     elt.innerHTML = s;
    //   }
    //   if((windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/")||(c1>=2)){
    //   for (elt of paragraphsDiv) {
    //     s = elt.innerText;
    //     s = circleText(s);
    //     // elt.classList.add("rotate");
    //     elt.innerHTML = s;
    //   }
    // }
    //   for (elt of paragraphsH2) {
    //     s = elt.innerText;
    //     // elt.classList.add("rotate");
    //     s = circleText(s);
    //     elt.innerHTML = s;
    //   }
    //   for (elt of paragraphsH3) {
    //     s = elt.innerText;
    //     s = circleText(s);
    //     // elt.classList.add("rotate");
    //
    //     elt.innerHTML = s;
    //   }
    //   for (elt of paragraphsH6) {
    //     s = elt.innerText;
    //     s = circleText(s);
    //     // elt.classList.add("rotate");
    //
    //     elt.innerHTML = s;
    //   }
    //   for (elt of paragraphsSpan) {
    //     s = elt.innerText;
    //     s = circleText(s);
    //     // elt.classList.add("rotate");
    //     elt.innerHTML = s;
    //   }
    //   for (elt of paragraphsli) {
    //     s = elt.innerText;
    //     s = circleText(s);
    //     // elt.classList.add("rotate");
    //     elt.innerHTML = s;
    //   } //add other words
    //   charCount = 0;
    //   for (elt of paragraphs_p) {
    //     s = elt.innerText;
    //     if (charCount > 0) {
    //       s = circleText(s);
    //     } else if (charCount == 0) {
    //       var s = "";
    //     }
    //     charCount++;
    //     if (s.length > 0) {
    //       // elt.classList.add("rotate");
    //     }
    //
    //     elt.innerHTML = s;
    //   }
    } else if (keyCode === 85) {                                                //KEYCODE FOR u-done
      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replaceBlur(s);
        elt.innerHTML = s;
      }
      // for (elt of paragraphsDiv) {
      //   s = elt.innerText;
      //   s = replaceBlur(s);
      //   elt.innerHTML = s;
      // }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replaceBlur(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {

        s = elt.innerText;
        s = replaceBlur(s);


        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replaceBlur(s);

        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replaceBlur(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replaceBlur(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replaceBlur(s);
        } else if (charCount == 0) {
          var s = "";
        }
        charCount++;
        if (s.length > 0) {
          elt.classList.add("rotate");
        }

        elt.innerHTML = s;
      }
    } else if (keyCode === 73) {                                                //KEYCODE FOR i-done
      charCount = 0;
      for (elt of paragraphsH1) { //add other words
        ////elt.style['color'] = 'rgb(0,255,0)';
        if (charCount%2==0) {
          elt.style['transform'] = 'skew(15deg,15deg)';
        } else {
          elt.style['transform'] = 'skew(-15deg,-15deg)';
        }
        charCount++;
      }
      charCount = 0;
        if(windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/"){
          ////elt.style['color'] = 'rgb(0,255,0)';
      for (elt of paragraphsDiv) {
        if (charCount%2==0) {
          elt.style['transform'] = 'skew(15deg,15deg)';
        } else {
          elt.style['transform'] = 'skew(-15deg,-15deg)';
        }
        charCount++;
      }
    }
      charCount = 0;
      for (elt of paragraphsH2) {
        ////elt.style['color'] = 'rgb(0,255,0)';
        if (charCount%2==0) {
          elt.style['transform'] = 'skew(15deg,15deg)';
        } else {
          elt.style['transform'] = 'skew(-15deg,-15deg)';
        }
        charCount++;
      }
      charCount = 0;
      for (elt of paragraphsH3) {
        ////elt.style['color'] = 'rgb(0,255,0)';
        if (charCount%2==0) {
          elt.style['transform'] = 'skew(15deg,15deg)';
        } else {
          elt.style['transform'] = 'skew(-15deg,-15deg)';
        }
        charCount++;
      }
      charCount = 0;
      for (elt of paragraphsH6) {
        ////elt.style['color'] = 'rgb(0,255,0)';
        if (charCount%2==0) {
          elt.style['transform'] = 'skew(15deg,15deg)';
        } else {
          elt.style['transform'] = 'skew(-15deg,-15deg)';
        }
        charCount++;
      }
      charCount = 0;
      for (elt of paragraphsSpan) {
        ////elt.style['color'] = 'rgb(0,255,0)';
        if (charCount%2==0) {
          elt.style['transform'] = 'skew(15deg,15deg)';
        } else {
          elt.style['transform'] = 'skew(-15deg,-15deg)';
        }
        charCount++;
      }
      for (elt of paragraphsli) {
        ////elt.style['color'] = 'rgb(0,255,0)';
        if (charCount%2==0) {
          elt.style['transform'] = 'skew(15'+i+'deg,15'+i+'deg)';
        } else {
          elt.style['transform'] = 'skew(-15'+i+'deg,-15'+i+'deg)';
        }
      } //add other words
      for (elt of a) {
        ////elt.style['color'] = 'rgb(0,255,0)';
        if (charCount%2==0) {
          elt.style['transform'] = 'skew(15'+i+'deg,15'+i+'deg)';
        } else {
          elt.style['transform'] = 'skew(-15'+i+'deg,-15'+i+'deg)';
        }
      }
      charCount = 0;
      for (elt of paragraphs_p) {
        // s = elt.innerText;
        ////elt.style['color'] = 'rgb(0,255,0)';
        if (charCount > 0) {
          if (charCount%2==0) {
            elt.style['transform'] = 'skew(15deg,15deg)';
          } else {
            elt.style['transform'] = 'skew(-15deg,-15deg)';
          }

        } else if (charCount == 0) {
          var s = "";
            elt.innerHTML = s;
        }
        charCount++;
        if (s.length > 0) {
          // elt.classList.add("rotate");
        }

        // elt.innerHTML = s;
      }
    }else if (keyCode === 79) {                                                //KEYCODE FOR o-done
      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replaceSkew(s);
        elt.innerHTML = s;
      }
      // for (elt of paragraphsDiv) {
      //   s = elt.innerText;
      //   s = replaceBlur(s);
      //   elt.innerHTML = s;
      // }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replaceSkew(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {

        s = elt.innerText;
        s = replaceSkew(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replaceSkew(s);

        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replaceSkew(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replaceSkew(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replaceSkew(s);
        } else if (charCount == 0) {
          var s = "";
        }
        charCount++;
        if (s.length > 0) {
          // elt.classList.add("rotate");
        }

        elt.innerHTML = s;
      }
    }else if (keyCode === 80) {                                                //KEYCODE FOR p-done
      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replaceSkew1(s);
        elt.style['transform'] = 'skew(15deg,15deg)';
        elt.style['margin-bottom'] = '60px';
        elt.innerHTML = s;
      }
      // for (elt of paragraphsDiv) {
      //   s = elt.innerText;
      //   s = replaceBlur(s);
      //   elt.innerHTML = s;
      // }
      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replaceSkew1(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {

        s = elt.innerText;
        s = replaceSkew1(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replaceSkew1(s);

        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replaceSkew1(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replaceSkew1(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replaceSkew1(s);
        } else if (charCount == 0) {
          var s = "";
        }
        if (charCount > 0) {
          if (charCount%2==0) {
            elt.style['transform'] = 'skew(15deg,15deg)';
          } else {
            elt.style['transform'] = 'skew(-15deg,-15deg)';
          }
        }
        charCount++;
        // elt.style['transform'] = 'skew(15deg,15deg)';
        elt.innerHTML = s;
      }
    }else if (keyCode === 65) {                                                 //KEYCODE FOR a-done
      for (elt of paragraphsH1) { //add other words
        s = elt.innerText;
        s = replaceSpace(s);
        elt.innerHTML = s;
      }

      for (elt of paragraphsH2) {
        s = elt.innerText;
        s = replaceSpace(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH3) {

        s = elt.innerText;
        s = replaceSpace(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsH6) {
        s = elt.innerText;
        s = replaceSpace(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsSpan) {
        s = elt.innerText;
        s = replaceSpace(s);
        elt.innerHTML = s;
      }
      for (elt of paragraphsli) {
        s = elt.innerText;
        s = replaceSpace(s);
        elt.innerHTML = s;
      } //add other words
      charCount = 0;
      for (elt of paragraphs_p) {
        s = elt.innerText;
        if (charCount > 0) {
          s = replaceSpace(s);
        } else if (charCount == 0) {
          var s = "";
        }
        charCount++;
        if (s.length > 0) {
          elt.classList.add("rotate");
        }
        elt.innerHTML = s;
      }
    }else if (keyCode === 83) {                                                //KEYCODE FOR s-done
       for (elt of paragraphsH1) { //add other words
         s = elt.innerText;
         s = replaceSkew(s);
         elt.innerHTML = s;
       }

       for (elt of paragraphsH2) {
         s = elt.innerText;
         s = replaceSkew(s);
         elt.innerHTML = s;
       }
       for (elt of paragraphsH3) {

         s = elt.innerText;
         s = replaceSkew(s);
         elt.innerHTML = s;
       }
       for (elt of paragraphsH6) {
         s = elt.innerText;
         s = replaceSkew(s);

         elt.innerHTML = s;
       }
       for (elt of paragraphsSpan) {
         s = elt.innerText;
         s = replaceSkew(s);
         elt.innerHTML = s;
       }
       for (elt of paragraphsli) {
         s = elt.innerText;
         s = replaceSkew(s);
         elt.innerHTML = s;
       } //add other words
       charCount = 0;
       for (elt of paragraphs_p) {
         s = elt.innerText;
         if (charCount > 0) {
           s = replaceSkew(s);
         } else if (charCount == 0) {
           var s = "";
         }
         charCount++;
         if (s.length > 0) {
         }

         elt.innerHTML = s;

       }
       charCount = 0;
       for (elt of paragraphsH1) { //add other words
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15deg,15deg)';
         } else {
           elt.style['transform'] = 'skew(-15deg,-15deg)';
         }
         charCount++;
       }
       charCount = 0;
         if(windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/"){
       for (elt of paragraphsDiv) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15deg,15deg)';
         } else {
           elt.style['transform'] = 'skew(-15deg,-15deg)';
         }
         charCount++;
       }
       }
       charCount = 0;
       for (elt of paragraphsH2) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15deg,15deg)';
         } else {
           elt.style['transform'] = 'skew(-15deg,-15deg)';
         }
         charCount++;
       }
       charCount = 0;
       for (elt of paragraphsH3) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15deg,15deg)';
         } else {
           elt.style['transform'] = 'skew(-15deg,-15deg)';
         }
         charCount++;
       }
       charCount = 0;
       for (elt of paragraphsH6) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15deg,15deg)';
         } else {
           elt.style['transform'] = 'skew(-15deg,-15deg)';
         }
         charCount++;
       }
       charCount = 0;
       for (elt of paragraphsSpan) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15deg,15deg)';
         } else {
           elt.style['transform'] = 'skew(-15deg,-15deg)';
         }
         charCount++;
       }
       for (elt of paragraphsli) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15'+i+'deg,15'+i+'deg)';
         } else {
           elt.style['transform'] = 'skew(-15'+i+'deg,-15'+i+'deg)';
         }
       } //add other words
       for (elt of a) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15'+i+'deg,15'+i+'deg)';
         } else {
           elt.style['transform'] = 'skew(-15'+i+'deg,-15'+i+'deg)';
         }
       }
       charCount = 0;
       for (elt of paragraphs_p) {

         if (charCount > 0) {
           if (charCount%2==0) {
             elt.style['transform'] = 'skew(15deg,15deg)';
           } else {
             elt.style['transform'] = 'skew(-15deg,-15deg)';
           }

         } else if (charCount == 0) {
           var s = "";
             elt.innerHTML = s;
         }
         charCount++;
         if (s.length > 0) {
         }
       }

     }else if (keyCode === 68) {                                                //KEYCODE FOR d-done
       charCount = 0;
       for (elt of paragraphsH1) { //add other words
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15deg,15deg)';
         } else {
           elt.style['transform'] = 'skew(-15deg,-15deg)';
         }
         charCount++;
       }
       charCount = 0;
         if(windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/"){
       for (elt of paragraphsDiv) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15deg,15deg)';
         } else {
           elt.style['transform'] = 'skew(-15deg,-15deg)';
         }
         charCount++;
       }
     }
       charCount = 0;
       for (elt of paragraphsH2) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15deg,15deg)';
         } else {
           elt.style['transform'] = 'skew(-15deg,-15deg)';
         }
         charCount++;
       }
       charCount = 0;
       for (elt of paragraphsH3) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15deg,15deg)';
         } else {
           elt.style['transform'] = 'skew(-15deg,-15deg)';
         }
         charCount++;
       }
       charCount = 0;
       for (elt of paragraphsH6) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15deg,15deg)';
         } else {
           elt.style['transform'] = 'skew(-15deg,-15deg)';
         }
         charCount++;
       }
       charCount = 0;
       for (elt of paragraphsSpan) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15deg,15deg)';
         } else {
           elt.style['transform'] = 'skew(-15deg,-15deg)';
         }
         charCount++;
       }
       for (elt of paragraphsli) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15'+i+'deg,15'+i+'deg)';
         } else {
           elt.style['transform'] = 'skew(-15'+i+'deg,-15'+i+'deg)';
         }
       } //add other words
       for (elt of a) {
         if (charCount%2==0) {
           elt.style['transform'] = 'skew(15'+i+'deg,15'+i+'deg)';
         } else {
           elt.style['transform'] = 'skew(-15'+i+'deg,-15'+i+'deg)';
         }
       }
       charCount = 0;
       for (elt of paragraphs_p) {
         if (charCount > 0) {
           if (charCount%2==0) {
             elt.style['transform'] = 'skew(15deg,15deg)';
           } else {
             elt.style['transform'] = 'skew(-15deg,-15deg)';
           }

         } else if (charCount == 0) {
           var s = "";
             elt.innerHTML = s;
         }
         charCount++;
         if (s.length > 0) {
         }
       }

       for (elt of paragraphsH1) { //add other words
         s = elt.innerText;
         s = replacerBaslineShift1(s);
         elt.innerHTML = s;
       }
       if(windwUrl!="http://elupton.com/2010/10/the-designer-as-producer/"){
         for (elt of paragraphsDiv) {
           s = elt.innerText;
           s = replacerBaslineShift1(s);
           elt.innerHTML = s;
         }
     }
       for (elt of paragraphsH2) {
         s = elt.innerText;
         s = replacerBaslineShift1(s);
         elt.innerHTML = s;
       }
       for (elt of paragraphsH3) {
         s = elt.innerText;
         s = replacerBaslineShift1(s);
         elt.innerHTML = s;
       }
       for (elt of paragraphsH6) {
         s = elt.innerText;
         s = replacerBaslineShift1(s);
         elt.innerHTML = s;
       }
       for (elt of paragraphsSpan) {
         s = elt.innerText;
         s = replacerBaslineShift1(s);
         elt.innerHTML = s;
       }
       for (elt of paragraphsli) {
         s = elt.innerText;
         s = replacerBaslineShift1(s);
         elt.innerHTML = s;
       }
       charCount = 0;
       for (elt of paragraphs_p) {
         s = elt.innerText;
         if (charCount > 0) {
           s = replacerBaslineShift1(s);
         } else if (charCount == 0) {
           var s = "";
         }
         elt.innerHTML = s;
         charCount++;
       }
     }else if (keyCode === 90) {
       location.reload();
      }

    window.print();
    location.reload();
  }
}else if ((c==undefined)&&(c1==0)){
    console.log("no related content");
  }
}



// mouse pressed function
function mousePressed() {
console.log("mouse pressed"+keyCode);
keyCode = int(random(69,89));
keyPressed();
console.log("mouse pressed"+keyCode);

  // location.reload(true);
}
