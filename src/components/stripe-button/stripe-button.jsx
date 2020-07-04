import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51H1EYCE6fG7Vn9WswF5XqRbpfpZQE3VEUIfK0kxZL3wb1SCQeTFJeUeBfruA8YV6Dis0uX5VFPy9BjzTdN038lZj00LokbKrgD";

    const onToken = (token) => {
      console.log(token)
      alert("Payment successful")
    }
	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
