function updateTitle() {
  
  var videoID = '{Enter the literals at the end of your YouTube URL here}'; //{Enter Your URL Here to keep track of it}
  var part = 'snippet,statistics';
  var params = {'id': videoID};
  
  var response = YouTube.Videos.list(part, params);
  var video = response.items[0];
  var videoViewsCount = video.statistics.viewCount;
  var videoTitle = 'How this video has ' + videoViewsCount + ' views?';

  
  try{
    YouTube.Videos.update(video, part);
    
  }catch(e){
    
  }
  
}
