// Connecting to MetaMask
const connectButton = document.getElementById("connectMetamask");
const accountInfo = document.getElementById("accountInfo");
const balanceField = document.getElementById("balance");

let web3;
let account;

// MetaMask Connection
connectButton.addEventListener("click", async () => {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            account = accounts[0];
            accountInfo.innerText = `Connected Account: ${account}`;
            
            // Fetch balance
            const balance = await web3.eth.getBalance(account);
            balanceField.innerText = `Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`;
        } catch (error) {
            console.error("MetaMask connection failed", error);
        }
    } else {
        alert('MetaMask is not installed');
    }
});

// Token Swap (Mock)
const tokenSwapForm = document.getElementById("tokenSwapForm");
const swapResult = document.getElementById("swapResult");

tokenSwapForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fromToken = event.target.fromToken.value;
    const toToken = event.target.toToken.value;

    // Mock swap simulation
    swapResult.innerText = `Successfully swapped ${fromToken} to ${toToken}`;
});

// Transaction Viewer (Mock Data)
const transactionHistory = document.getElementById("transactionHistory");
const transactions = [
    { type: 'Swap', details: 'Swapped 1 ETH to DAI' },
    { type: 'Mining', details: 'Mined 0.2 ETH' },
];

transactions.forEach((txn) => {
    const li = document.createElement('li');
    li.textContent = `${txn.type}: ${txn.details}`;
    transactionHistory.appendChild(li);
});
