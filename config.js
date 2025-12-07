module.exports = {
  TOKEN: "MTMwNDgwODc1ODc0ODM4NTM4Mw.G1rx4K.EeZcAHeVZJ0J6alxaxqn4ckrLFgao5uWTZ-Rrg",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://jagjeet:<db_password>@cluster0.szrkjrd.mongodb.net/?appName=Cluster0",
  spotifyClientId : "", //"d92baed9605a45a39ed7c2a2d960b1c1"
  spotifyClientSecret : "", //"e9b29f6739de4315bc03b6d8a8e93b03"
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#87CEFA",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "",
  embedTimeout: ,
  showProgressBar: false,  // Show progress bar in track embed
  showVisualizer: false,  // Show visualizer on music card (disabled for low-memory optimization)
  generateSongCard: true,  // custom song card image, if false uses thumbnail
  // Performance optimizations for low-memory environments (512MB RAM)
  lowMemoryMode: true,  // Enable optimizations for low-memory hosting
  errorLog: "", 
  nodes: [
     {
      name: "GlceYT",
      password: "glace",
      host: "us-01.strixnodes.com",
      port: 8003,
      secure: false
    }
  ]
}
