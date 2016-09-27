-------------------------------------------------
Directories structure
-------------------------------------------------

The two directories that contains the front end are views and src.
Views contains the jade, css and javascript for the development, src the files for production. All the file inside src are generated from gulp and should not be touched. (Because they are overwritten).
Here the structure:
Here the structure of views/src:
├── assets
│   ├── fonts
│   └── images
├── directives
├── footer
├── header
├── index
│   └── blocks
├── jquery
└── services

Assents contains the custom fonts and all the images. Images can also be inside some subfolders.
Directives contains all common the directives.
Services contains all the services.
Jquery contains all the javascript files which are not angular
Then for every view there is a folder, like footer, header, and index. Inside this kind of folders there are all the files relatives to that view like:
- sass
-jade
-controller
-directives

Inside index there is a subfolder called blocks, which contains all the possible blocks that compose the index. They can also be reused for other pages.

-------------------------------------------------
Gulp tasks
-------------------------------------------------

There is a main gulp task which is gulp serve.
Other tasks are
 - copyAssetstoSrc to copy the assets
 - copyFiletoSrc to copy js and html files
 - style to compile sass and concatenate all the css inside one file

 All these tasks are glued with some watches to.
 The gulpfile use some fuctions that are inside the gulp directory, for example the vendor javascript, like jquery, angular etc. are concatenated in one file col lib.min.js, and this operation is visible in gulp/build.js

I decide to use gulp instead of grunt because I think that for simple operation gulp require less overhead, and also in the last year I used gulp.

-------------------------------------------------
Why Jade? 
-------------------------------------------------

Jade is much more powerfull than simple HTML in this project I just use the possibility of file inclusion. 
The final html is only one file, but this file is composed of three different jade, header, index, and footer. Moreover index is composed of many blocks which are in different jade file.

Header and footer are included from the layout.jade which is the parent file, and in this way all the pages have automatically the header and the footer. This approach is more maintanable and encourage re usability. For example I can reuse the blocks of the index in other pages.7
Another point of strenght of Jade are variables, if statement and loops, but I did not use them in this project.

-------------------------------------------------
Menu and block contents
-------------------------------------------------
The menu is hardcoded in the header controller. Obviously in a real case scenario the menu is retrieved outside the frontend. The same for the content of the blocks. Here all the blocks are hard coded, but the content should be passed, using Jade (page generated server side) or Angular (page generated client side). 
Ideally the client could insert content and style it from a CMS, and then this information are retrieved and used to create the page. To improve the performance all this information could be stored inside a redis instance on the server (if the content is retrieved from the sever)

-------------------------------------------------
Css cascade
-------------------------------------------------
When I apply some classes to an element I always put custom class as last, so they can overwrite standard behaviour of Bootstrap (or other frmeworks)

-------------------------------------------------
Faq directive and transclusion
-------------------------------------------------
I like the use of the faq directive. Inside the jade I put the information (hardcoded in this case, dynamic in a real world case) and then the directive use the transclusion property to use it. This kind of transclusion in multi transclusion which is available from angular 1.4.
The scope of the directive is isolated, and this make possible to open the content of every question alone, because every question has an isolated scope.

-------------------------------------------------
Git and production flow
-------------------------------------------------

In this case i put inside the git repo also the src folder, because I use that repo to serve the app at https://strata3-eir.herokuapp.com/ .
But in a real case I don't need to put the src in git, because the view folder is enough. The src will be created running gulp tasks on the server.