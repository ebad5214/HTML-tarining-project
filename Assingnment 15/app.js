$("form").submit(function(e){

    e.preventDefault();

    var task = $("input[name='task']").val();

    var des = $("input[name='des']").val();

 

    $(".data-table tbody").append("<tr data-task='"+task+"' data-des='"+des+"'><td>"+task+"</td><td>"+des+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");



    $("input[name='task']").val('');

    $("input[name='des']").val('');

});



$("body").on("click", ".btn-delete", function(){

    $(this).parents("tr").remove();

});



$("body").on("click", ".btn-edit", function(){

    var task = $(this).parents("tr").attr('data-task');

    var des = $(this).parents("tr").attr('data-des');



    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_task" value="'+task+'">');

    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_des" value="'+des+'">');



    $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")

    $(this).hide();

});



$("body").on("click", ".btn-cancel", function(){

    var task = $(this).parents("tr").attr('data-task');

    var des = $(this).parents("tr").attr('data-des');



    $(this).parents("tr").find("td:eq(0)").text(task);

    $(this).parents("tr").find("td:eq(1)").text(des);



    $(this).parents("tr").find(".btn-edit").show();

    $(this).parents("tr").find(".btn-update").remove();

    $(this).parents("tr").find(".btn-cancel").remove();

});



$("body").on("click", ".btn-update", function(){

    var task = $(this).parents("tr").find("input[name='edit_task']").val();

    var des = $(this).parents("tr").find("input[name='edit_des']").val();



    $(this).parents("tr").find("td:eq(0)").text(task);

    $(this).parents("tr").find("td:eq(1)").text(des);

 

    $(this).parents("tr").attr('data-name', task);

    $(this).parents("tr").attr('data-email', des);



    $(this).parents("tr").find(".btn-edit").show();

    $(this).parents("tr").find(".btn-cancel").remove();

    $(this).parents("tr").find(".btn-update").remove();

});