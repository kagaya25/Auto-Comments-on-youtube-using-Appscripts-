// @ts-nocheck
function myFunction(video, youtubechannelid, comments) {
   resource = {
    snippet: {
      channelId: youtubechannelid,
      videoId: video,
      topLevelComment: {
        snippet: {
          textOriginal: comments
        }
      }
    }
  };
  YouTube.CommentThreads.insert(resource,"snippet");
}

myFunction("89XdCh75Mls","UCiBfuUreTbKvBKtQbb6SIWQ","Appscripts auto comments test")


