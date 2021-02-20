import {
  Box, Button, Text,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_live_51I323eKOxPIlITGP2wJgqwTN9pU7vnP2cEOxERgqkuqZngs03MY2NvX8pldjcDxSCwxsZMPC58BatendDLtvtMw900QJ48Fpls')
// const stripePromise = loadStripe('pk_test_51I323eKOxPIlITGP4PAGdAqbRAX37U95omjMUzAckSRz97xmOV6r8ZrV5h0rzN18G937CTNSQ4u5WdoMvLjiwp5S00umLcI3fC')

export default function MNGStripeButton({
  size       = "md",
  mt         = 0,
  label      = "ACCEPT",
  priceid    = 'price_1I6Jm8KOxPIlITGPDMjnfBPh',
  successUrl = '/yoga/welcome',
  cancelUrl  = '/yoga'
}) {
  var errorMessage  = ""
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise

    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */
    stripe.redirectToCheckout({
      lineItems: [{price: priceid, quantity: 1}],
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://stripe.com/docs/payments/checkout/fulfill-orders
       */
      successUrl: 'https://natarajg.space' + successUrl,
      cancelUrl: 'https://natarajg.space' + cancelUrl,
    })
    .then(function (result) {
      if (result.error) {
        errorMessage = result.error.message
      }
    })
  }

  return (
    <Box mt={mt}>
      <Button
        bg="#6E0A70"
        size={size}
        color="#F8CDF9"
        px={8}
        onClick={handleClick}
        _hover={{
          bg: "#510653"
      }}>
        {label}
      </Button>
      <Text color="#F8CDF9" align="center">{errorMessage}</Text>
    </Box>
  )
}
