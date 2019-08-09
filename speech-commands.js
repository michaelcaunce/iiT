if (annyang) {
    
    annyang.setLanguage('en-GB');
    
    annyang.addCommands({
        "(go) (return) back":function(){window.history.back()},
        "(go) forward":function(){window.history.go(1)},
        "(click) (open) (go to) (select) home":function(){window.location = ("/index.html")},
        "(click) (open) (go to) (select) agile":function(){window.location = ("/Agile.html")},
        "(click) (open) (go to) (select) waterfall":function(){window.location = ("/Waterfall.html")},
        "(click) (open) (go to) (select) black box":function(){window.location = ("/Black-Box.html")},
        "(click) (open) (go to) (select) white box":function(){window.location = ("/White-Box.html")},
        "(click) (open) (go to) (select) manual":function(){window.location = ("/Manual.html")},
        "(click) (open) (go to) (select) automated":function(){window.location = ("/Automated.html")},

        "(click) (open) (go to) (select) agile read more":function(){window.location = ("/Agile.html")},
        "(click) (open) (go to) (select) waterfall read more":function(){window.location = ("/Waterfall.html")},
        "(click) (open) (go to) (select) black box read more":function(){window.location = ("/Black-Box.html")},
        "(click) (open) (go to) (select) white box read more":function(){window.location = ("/White-Box.html")},
        "(click) (open) (go to) (select) manual read more":function(){window.location = ("/Manual.html")},
        "(click) (open) (go to) (select) automated read more":function(){window.location = ("/Automated.html")},
        
        "(go to) (back to) (return to) the top":function(){
            window.scrollTo(0,0)
        },
        "scroll down":function(){
            scrollBy(0, 500);
        },
        "scroll up":function(){
            scrollBy(0, -500);
        },
        "scroll down more":function(){
            scrollBy(0, 700);
        },
        "scroll up more":function(){
            scrollBy(0, -700);
        },
        
    });
    
    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
}
