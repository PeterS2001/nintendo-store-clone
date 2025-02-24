import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';

const OrderConfirmation = () => {
  const location = useLocation();
  const { clearCart } = useCart();
  const orderDetails = location.state?.orderDetails;

  useEffect(() => {
    // Clear the cart after successful purchase
    clearCart();

    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, [clearCart]);

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-red-600 sm:text-5xl">404</p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Order not found</h1>
                <p className="mt-1 text-base text-gray-500">Please complete checkout to see order confirmation.</p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  to="/products"
                  className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-base font-medium text-red-600">Thank you!</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Order confirmed</p>
          <p className="mt-2 text-base text-gray-500">
            Your order #{orderDetails.orderNumber} has been placed and will be with you soon.
          </p>
        </div>

        <div className="mt-10 border-t border-gray-200">
          <h2 className="sr-only">Your order</h2>

          <h3 className="sr-only">Items</h3>
          {orderDetails.items.map((item: any) => (
            <div key={item.id} className="flex space-x-6 border-b border-gray-200 py-10">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-contain object-center sm:h-40 sm:w-40"
              />
              <div className="flex flex-auto flex-col">
                <div>
                  <h4 className="font-medium text-gray-900">
                    <Link to={`/products/${item.id}`}>{item.name}</Link>
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="mt-6 flex flex-1 items-end">
                  <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                    <div className="flex">
                      <dt className="font-medium text-gray-900">Quantity</dt>
                      <dd className="ml-2 text-gray-700">{item.quantity}</dd>
                    </div>
                    <div className="flex pl-4 sm:pl-6">
                      <dt className="font-medium text-gray-900">Price</dt>
                      <dd className="ml-2 text-gray-700">{item.price}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}

          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Your information</h3>

            <h4 className="sr-only">Addresses</h4>
            <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
              <div>
                <dt className="font-medium text-gray-900">Shipping address</dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block">{orderDetails.shippingAddress.name}</span>
                    <span className="block">{orderDetails.shippingAddress.street}</span>
                    <span className="block">{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zip}</span>
                    <span className="block">{orderDetails.shippingAddress.country}</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Payment information</dt>
                <dd className="mt-2 text-gray-700">
                  <span className="block">Card ending in {orderDetails.payment.last4}</span>
                </dd>
              </div>
            </dl>

            <h4 className="sr-only">Summary</h4>
            <dl className="space-y-6 border-t border-gray-200 pt-10 text-sm">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Subtotal</dt>
                <dd className="text-gray-700">${orderDetails.subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Shipping</dt>
                <dd className="text-gray-700">${orderDetails.shipping.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Tax</dt>
                <dd className="text-gray-700">${orderDetails.tax.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-6">
                <dt className="text-base font-medium text-gray-900">Total</dt>
                <dd className="text-base text-gray-900">${orderDetails.total.toFixed(2)}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/products"
            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Continue Shopping
          </Link>
          <a
            href={`mailto:support@nintendo-store.com?subject=Order%20${orderDetails.orderNumber}%20Support`}
            className="text-sm font-semibold text-gray-900"
          >
            Need help? <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
