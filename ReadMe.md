// Change Input type from password to text

1) HTML
=============
Create input type password
Create button main innerText  Show 



2) css
=============
some style



3) JS
==============
Logic :
------

- 1 select input
- 2 select button
- 3 add event 

(default  type : password & inner text : show) on clicked button  [ Will using custom attribute for button data-text ="password]
                                                                  [ if button.getAttribute("data-text")=== "password" default value]
                                                                  => Convert input Attribute type to be text
                                                                  => Convert button custom attribute to be data-tex ="text" 
                                                                  => Convert button text content to hidden

(Now      type : text & inner text : hidden) on clicked button    [ Will using custom attribute for button data-text ="text]
                                                                  [ if button.getAttribute("data-text")=== "text"]
                                                                  => Convert input Attribute type to be password
                                                                  => Convert button custom attribute to be data-tex ="password" 
                                                                  => Convert button text content to show  

