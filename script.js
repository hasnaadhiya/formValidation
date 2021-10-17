function formValidation() {
    var name = document.myform.name;
    var address = document.myform.address;
    var email = document.myform.email;
    var pass = document.myform.password;
    var telp = document.myform.telephone;
    var course = document.myform.course;
    var zip = document.myform.zipcode;

    if (name_validation(name)) {
        if (address_validation(address)) {
            if (email_validation(email)) {
                if (pass_validation(pass, 8, 16)) {
                    if (telp_validation(telp, 7, 12)) {
                        if (course_validation(course)) {
                            if (zip_validation(zip, 6)) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }
    return false;

    function name_validation(name) {
        var letters = /^[A-Za-z\s]+$/;

        if (name.value.match(letters)) {
            return true;
        }
        else if (name.value == "") {
            alert("Please enter your name.");
            name.focus();
            return false;
        }
        else {
            alert('Name must have alphabet characters only');
            name.focus();
            return false;
        }
    }

    function address_validation(address) {
        if (address.value == "") {
            alert("Please enter your address.");
            address.focus();
            return false;
        }
        else {
            address.focus();
            return true;
        }
    }

    function email_validation(email) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value.match(mailformat)) {
            return true;
        }
        if (email.value == "") {
            alert("Please enter your email.");
            email.focus();
            return false;
        }
        else {
            alert("You have entered an invalid email address!");
            email.focus();
            return false;
        }
    }

    function pass_validation(pass, mx, my) {
        var passid_len = pass.value.length;
        if (passid_len == 0) {
            alert("Password should not be empty.");
            pass.focus();
            return false;
        }
        else if (passid_len > my || passid_len < mx){
            alert("Password length must be between " + mx + " to " + my);
            pass.focus();
            return false;
        }
        else {
            return true;
        }
    }

    function telp_validation(telp, mx, my) {
        var telp_len = telp.value.length;

        if (telp_len == 0) {
            alert("Telephone number should not be empty.");
            telp.focus();
            return false;
        }
        else if (telp_len < mx || telp_len > my){
            alert("Telephone number length must be between " + mx + " to " + my);
            telp.focus();
            return false;
        }
        else {
            return true;
        }
    }

    function course_validation(course) {
        if (course.value == "") {
            alert("Select your course.");
            course.focus();
            return false;
        }
        else {
            return true;
        }
    }

    function zip_validation(zip, maxlength) {
        var zip_len = zip.value.length;
        if (zip_len == 0) {
            alert("Zip code should not be empty.");
            zip.focus();
            return false;
        }
        else if (zip_len != maxlength){
            alert("Zip code length must be " + maxlength + " number");
            zip.focus();
            return false;
        }
        else {
            return true;
        }
    }
}
