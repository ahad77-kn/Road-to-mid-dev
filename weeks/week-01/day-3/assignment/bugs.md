<h1>-bug 1-</h1>
<p>:as i learned about specificities ,in css every of them has their position or values or importance...just like-<br>
(ID,CLASS & ELEMENT)every of them has values from (0 to 2 & 1).<br>
so in bug 1 i added [.price (0-2-0) and write color red in it and then .card p (0-1-1)and write its color blue]<br>
results are red because of specificity in css rules
.</p>

<h1>-bug 2-</h1>
:<p>in bug 2 i learned and struggled with the margin collapsing ,i studied and worked that when 2 margins touch each other then the browser just consider one margin value so for solving this we usually add padding to card and a flow ......but to be honestly i still did not get it because in the page i cant see the difference thats why....! 

<br>



.</p>
<h1>-bug 3-</h1>
<p>:so in pricing card when i add <br>
width 500px;<br>
padding 30px;<br>
marging 50px;<br>
so its totel becomes (580px)<br>
i have learned box sizing in which we can manage the size of the box .<br>
when i added (box-sizing:border-box)so it means the whole is equal to 500px and then sometimes the content overflow from the box .<br>
i added now (box-sizing:content-box)which coumts and use the whole (500+30+50)and it fits for me now </p>

<h1>-bug 4-</h1>
<p>i added .pricing-card and color light orange <br> and then again .pricing card and color black.<br>
after running it what happenend?? the h2 color was black but why ? as i learned in css rules if both specificities are same then the brwoser will run the one which comes after .</p>

<h1>-bug 5-</h1>
<p>:in pricing-card li,,,,i added color:aqua with( !important)<br>and then again a 2nd pricing-card li and added a color brown.<br>
 now the browser has to run the 2nd but here no!!! its not brown ,its aqua why this? <br>
 cuz here i used (!important )this attribute tells the browser that this is important or must thats why broweser runs this.....but sometimes if we give (!important )to both colors then it fails or maybe error because the browser fights for it so its wrong thing to use everytime .<br>
 thats why in css rules the specifities and conflicts are introduced.</P>