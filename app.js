const wa = require('@open-wa/wa-automate');

wa.create({
    sessionId: "Bot-Personal",
    qrTimeout: 0, //0 means it will wait forever for you to scan the qr code
  }).then(client => start(client));
  
  async function start(client) {
    const final_number = "919737205544@c.us"
    let count =0;
    const isRegistered = await client.checkNumberStatus(final_number);
    if (isRegistered) {
      
            let success = await client.sendText(final_number, "Hey I am a bot.");
            ++count;
        }   
        console.log("Sucess:",count);

        
    }

  