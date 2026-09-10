# Cryptocurrency wallet balance tracker 📈


⚠️ Google Account is required.

➡️ [Live Preview](https://docs.google.com/spreadsheets/d/1-CHWN_lpJlKQTKm3HGBRV4gitopFQx2H1InrW8sTSLo/edit?usp=sharing)

## About

- Simple Google Sheet fetch and store "cron" job script
- Track your wallet balance by using Google Sheets web app functionality
- This script can be used for any other blockchain, just configure data fetching details (specific for that blockchain) and use it as that blockchain wallet tracker
- Also, it can be used for other fetch and store repeating operations, e.g., fetching Binance market trading pairs, or even in combination with fetching blockchain data and market data and doing some type of analysis

## Instructions

1. Open Google Drive
2. Create new Google Sheet `New -> Google Sheets`
3. `Add sheet` for each wallet you want to track, plus one sheet for the Logfile
4. Call them, e.g., *Idena1*, *Idena2*, ..., and *Log*
5. Open `Share -> Get link`
    - e.g. *https://docs.google.com/spreadsheets/d/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/edit?usp=sharing*
    - Save somewhere *XX...XX* from the link
6. Open `Extensions -> Apps Scripts`
7. Overwrite default *Code.gs* with *Code.gs* from the repository and change constants at the top
8. Open `Deploy -> New Deployment -> Select type = Web App`
    - Add Configuration:
        - *Any description*
        - *Execute As: Me*
        - *Who has access: Only myself*
9. Click `Deploy`
10. Set function *initTriggers* at `Select function` to run and click `Run`
11. Let it run for a few days, after that, you will have enough of a sample to calculate the statistics you are interested in.
    - Columns: { *Timestamp*, *Balance*, *Stake*, *Sum* } belong to script and any data added to that rows could be overwritten
    - In order to add more stats, just add functions to the free columns, starting from column "E"


## Preview (in case of [Live Preview](https://docs.google.com/spreadsheets/d/1-CHWN_lpJlKQTKm3HGBRV4gitopFQx2H1InrW8sTSLo/edit?usp=sharing) link is dead)

### Sheet - Wallet balance values
<img src="https://user-images.githubusercontent.com/49691921/236667934-ee03a7d4-03f7-4155-8e38-0000727dc9d5.png"  width="600">

### Chart - Wallet balance through time
<img src="https://user-images.githubusercontent.com/49691921/236667936-964906ba-d96c-481b-9708-79d9deb3d06e.jpg"  width="600">

### Chart - Wallet balance income through time
<img src="https://user-images.githubusercontent.com/49691921/236667941-327b2ab6-b0cd-41ef-8a6b-b621dfdce814.png"  width="600">





