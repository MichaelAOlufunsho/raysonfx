import { ENDPOINT } from "../constants.js"
const SiteData = []

function GetSiteData() {
    return fetch(`${ENDPOINT}/admin/getSiteSettings.php`, {
        method: "GET",
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {
            const Phonenumber = data.phonenumber;
            const address = data.address;
            const ethWallet = data.ETHWallet;
            const btcWallet = data.BTCWallet;
            const eth_rate = data.eth_rate
            const btc_rate = data.btc_rate

            const siteData = {
                phone: Phonenumber,
                btc: btcWallet,
                office: address,
                eth: ethWallet,
                eth_rate:eth_rate,
                btc_rate: btc_rate
            };
            
            return siteData; // Return the data instead of modifying a global array
        } else {
            console.log(data.message)
            
            // throw new Error(data.message);
        }
    });
}

export {
    GetSiteData
}