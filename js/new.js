$("form").submit(function (event) {    
        
    event.preventDefault();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var temp = user.email;
            var date = new Date();
            var d;
            var month = date.getMonth() + 1;
            d = date.getDate() + "/" + month + "/" + date.getFullYear() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            date = d.toString();
            var ConsignmentNumber = $("#Consignment").val();
            var order = $("#order").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var toAddr = $("#toAddr").val();
            var fromAddr = $("#fromAddr").val();
            var weight = $("#weight").val();
            var length = $("#length").val();
            var breadth = $("#breadth").val();
            var height = $("#height").val();
            var dimensions = length + " X " + breadth + " X " + height;
            dimensions = dimensions.toString();
            var status;
            var remarks = " created by " + temp ;
            var postdata = {
                'date_and_time': date,
                'consignment_Number': ConsignmentNumber,
                'order': order,
                'email': email,
                'phone': phone,
                'to_address': toAddr,
                'from_address': fromAddr,
                'weight': weight,
                'dimensions': dimensions,
                'status': 'dispached',
                'remarks' : remarks,
            };
          console.log(postdata);
            var newPostRef = firebase.database().ref().child('consignment');
            newPostRef.push(postdata);
            $("form")[0].reset();           
            
        } else {
            $(".post_maker").css("display","none");
            window.location.replace("index.html");
        }
    });

});
