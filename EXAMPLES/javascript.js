const axios = require('axios')

try {
    const url = 'http://localhost:3000/api/client';
	const licensekey = "LICENSE_KEY"; // Get this from a config file
	const product = 'PRODUCT_NAME';
	const api_key = 'API_KEY'; // The API key you specified in the Plex Licenses config.yml file-
    const hwid = 'PC_IDENTIFIER'; // HWID, If you are using it for a discord bot, you can set it to a guild id for example.

    const res = await axios.post(
   		url,
   		{
   		    licensekey,
   		    product,
            hwid
   		},
   		{ headers: { Authorization: api_key }}
	);

   	if (!res.data.status_code || !res.data.status_id){
        await console.log("――――――――――――――――――――――――――――――――――――");
        await console.log('\x1b[31m%s\x1b[0m', 'Your license key is invalid!');
        await console.log('\x1b[31m%s\x1b[0m', `Create a ticket in our discord server to get one.`);
        await console.log("――――――――――――――――――――――――――――――――――――");
   	    return process.exit(1)
   	}

    if(res.data.status_overview !== "success"){
        await console.log("――――――――――――――――――――――――――――――――――――");
        await console.log('\x1b[31m%s\x1b[0m', 'Your license key is invalid!');
        await console.log('\x1b[31m%s\x1b[0m', `Create a ticket in our discord server to get one.`);
        await console.log("――――――――――――――――――――――――――――――――――――");
   		return process.exit(1);
   	} else {
        await console.log("――――――――――――――――――――――――――――――――――――");
        await console.log('\x1b[32m%s\x1b[0m', 'Your license key is valid!');
        await console.log('\x1b[36m%s\x1b[0m', "Discord ID: " + res.data.discord_id);
        await console.log("――――――――――――――――――――――――――――――――――――");
    }
} catch (err) {
    await console.log("――――――――――――――――――――――――――――――――――――");
    await console.log('\x1b[31m%s\x1b[0m', 'License Authentication failed');
    await console.log("――――――――――――――――――――――――――――――――――――");
    await console.log(error)
    await process.exit(1)
}
