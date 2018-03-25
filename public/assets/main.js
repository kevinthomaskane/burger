



$("#submitBurger").on("click", function(){
    var burger = {
        name: $("input").val()
    }
    $.post("/new", burger).then(function(data){
        location.reload();
    })
})

$(".devour").on("click", function(){
    console.log('devoured')
    var id = $(this).data("burgerid")
    $.ajax("/burgers/" + id, {
        type: "PUT",
      }).then(function(data){
          location.reload();
      })
    
})

