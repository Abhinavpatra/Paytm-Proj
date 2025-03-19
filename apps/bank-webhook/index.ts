import express from "express"
const app = express();

app.post("/hdfcWebhook",(req,res)=>{
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    // update balance in db, add txn
})
// add dbs
/**
 * balances
 * OnRampTransaction: to keep track of, list of transactions, status, id, amount, provider:bank name,  token:, startTime etc.. essentially transaction history, updated whever you undergo a transaction
 * */