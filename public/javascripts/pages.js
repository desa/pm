/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

window.addEvent('domready', function() {
    var add = $('add');
    var input_id = 0;
    var txtbox = function(id) {
                    var elId = "section-" + id; 
                    var txt = new Element('textarea', {'id': elId});
                    return txt;
                    };
    
    add.addEvent('click', function() {
        alert('clicked');
        input_id += 1;
        var section = txtbox(input_id);
        $$('body').adopt(section);
    });

});