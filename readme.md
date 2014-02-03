# fireword

> I've also made a quick [web app to generate passwords](http://firewordgen.herokuapp.com/) which use this script.

##waw (what and why)
It's a simple tool to convert memorable passwords to hard-to-crack passwords.  
I heard somewhere that any password you can remember is not strong enough. But I've been still using memorable passwords which I thought were safe enough. I used a pattern like &lt;mysecretword&gt;&lt;site_name&gt; etc for most websites I log in to. But I've involved in a kinda research project (in which the system prepares a dictionary of passwords targeting a single user by gathering information about her from her social accounts), and discovered that someone with access to my social accounts (although I don't have many) can easily guess those passwords.   
So here is a quick password generator (quick in the sense that it took me very less time building it)  

## How it work
This script receives a password from command line, convert it into sha512 hash, and mingle some characters to increase the complexity of the password.
It convert some special character on even places with symbols etc. (Read the code, it's simple. Really.)  
So the result is a long string which can be used as password on real sites.  

## How to use
Preferred way of using it is to 
* give it different password for every site, which you can remember
* generate a password using the script
* copy-paste for login to the site
* regenerate when needed again in future with same password as given in step1

### Recommended way choosing passwords for input
Use an easy to remember pattern which would be different for different sites. e.g
>     blueFacebookPants  
>     greenGooglePants  
>     orangeStumbleuponPants  
