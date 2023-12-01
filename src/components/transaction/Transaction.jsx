import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import  { useState } from "react";

const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({
    walletAddress: "",
    amount: "",
  });

  const validateWalletAddress = () => {
    const addressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!walletAddress.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        walletAddress: "Wallet Address cannot be empty",
      }));
    } else if (!addressRegex.test(walletAddress)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        walletAddress: "Invalid Ethereum address format",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, walletAddress: "" }));
    }
  };

  const validateAmount = () => {
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue < 0 || amountValue > 10000) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        amount: "Amount must be a number within the range of 0 - 10,000",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, amount: "" }));
    }
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      validateWalletAddress();
      validateAmount();

      // Additional logic if needed when submitting the form
    };
  return (
    <div className="transaction">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Wallet Address"
          variant="outlined"
          fullWidth
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          onBlur={validateWalletAddress}
          error={Boolean(errors.walletAddress)}
          helperText={errors.walletAddress}
        />
        <br />
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onBlur={validateAmount}
          error={Boolean(errors.amount)}
          helperText={errors.amount}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Transaction;
