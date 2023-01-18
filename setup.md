## Steps for setting cloudflare

1. use ``` npm i @cloudflare/wrangler ``` to install
2. use ``` npx wrangler login ``` to authorize the wrangler to your files folder

## Workers setup

1. use ``` npx wrangler generate <worker-name> ```
2. setup workers -> free plan
3. go to ``` https://dash.cloudflare.com/<accountID>/workers/overview ```
4. copy the **accountID** and paste that in the .toml file -> account_id
5. use ``` npx wrangler publish ```
6. go to ``` https://test-worker.priyatham-vatsavaye.workers.dev ``` to have a look


## Discord developer portal setup

1. go to ``` https://discord.com/developers/docs/intro ```
2. go to ``` https://discord.com/developers/applications ``` for the application setup
3. click on **+New Application** on the top right and create the application by naming it
4. 