//编码

var annc = {}


annc.render = function(content){
  var str_vim = he.encode(content);

  //$('#content').append("<div>"+str_vim+"</div");
  $('#content').append(str_vim);
  Prism.highlightAll();
}


annc.getAndRender  = function(url){
  $.get(url,function(data,status){
    annc.render(data);
  })
}

annc.run = function(){
  this.getAndRender('vimrc')
}
