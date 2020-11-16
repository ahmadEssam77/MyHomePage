function openPage(pageName,) {
    var i, pageContent, nav;  // Declaring the variables

    // Hide the contents inside every page
    pageContent = document.getElementsByClassName('pageContent'); 
    for (i = 0; i < pageContent.length; i++) {
        pageContent[i].style.display = "none";
    }

    // Remove the background color of all nav
    // nav = document.getElementsByClassName('nav');
    // for (i = 0; i < nav.length; i++) {
    //     nav[i].style.backgroundColor = "";
    // }
    
    // Get all elements with class nav
    // nav = document.getElementsByClassName('nav');
    // for (i = 0; i < nav.length; i++) {
    //     nav[i].className = nav[i].className.replace("active", "");
    // }

    // Show the specific tab content 
    document.getElementById(pageName).style.display = "block";
    //elmnt.style.backgroundColor = color;
}

// Select home to be as a default page
document.getElementById('defaultPage').click();
