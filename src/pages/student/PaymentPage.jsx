function PaymentPage() {
  const handlePayment = () => {
    alert("Razorpay Payment");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-5">Event Payment</h1>

        <p className="mb-5">Amount ₹500</p>

        <button
          onClick={handlePayment}
          className="bg-green-600 text-white w-full p-3 rounded"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
