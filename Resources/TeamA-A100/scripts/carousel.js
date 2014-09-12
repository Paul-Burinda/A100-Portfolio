var students_length = 0,
	students_views = [],
	left_child, // the leftmost list item in the carousel
	right_child; // the rightmost list item in the carousel

var carousel = function() {
    // fetch the data from local json file or from the database
	$.getJSON("./data/testimonials.json", function(data) {
        var students = data["students"];
        var partners = data["partners"];

        right_child = 2;
        left_child = 0;
        students_length = students.length;

        // compile underscore templates. first for students and second for partners
        var compiled = _.template(
            $("#student-comments").html()
        );

        var partn = _.template(
            $("#partner-comments").html()
        );

        // load the compiled templates into arrays
        _.each(students, function(student, index) {
            var view = compiled({student: student, i: index});    
            students_views.push(view);
        });

        var partner = partn({student: partners[0], i: 0});  

        // inject the partner view into the dom
        $(".panes2").html(partner);
        $(".partner_0").after(partner);

        // inject students' views into the dom
        $(".panes").html(students_views[0]);
        $(".student_0").after(students_views[1]);
        $(".student_1").after(students_views[2]);

        // hide the navigation if the length is 1 or less
        if (students_length <= 1) {
            $(".testimonials i").hide();
        }
    });

    // listen to click events from the right navigation button 
    $(".nav-right").click(function() {
        $(".panes").addClass("fixed_height");
        $(".tobe_removed").remove();

    	var new_right = (right_child + 1) % students_length
    	$(".student_"+right_child).after(students_views[new_right]);
        $(".student_"+left_child).addClass("hide_me");
        $(".student_"+left_child).addClass("tobe_removed");

        right_child = (right_child + 1) % students_length;
        left_child = (left_child + 1) % students_length;
        setTimeout(function(){
            $(".tobe_removed").remove();
            $(".panes").removeClass("fixed_height");
        }, 750);
    })

    // listen to click events from the left navigation button
    $(".nav-left").click(function() {
        $(".panes").addClass("fixed_height");
        $(".tobe_removed").remove();

        var new_left = (left_child == 0 ? students_views.length : left_child) 
        new_left = (new_left - 1) % students_views.length

        $(".student_"+right_child).remove();
        $(".student_"+left_child).before(students_views[new_left]);
        $(".student_"+new_left).removeClass("animate").addClass("hide_me");

        setTimeout(function(){
            $(".student_"+new_left).addClass("animate").removeClass("hide_me");
            left_child = new_left;
            right_child = (new_left + 2) % students_views.length;
        }, 1);

        setTimeout(function(){
            $(".panes").removeClass("fixed_height");
        }, 750);
    })

};