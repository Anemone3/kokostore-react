

export const PaymentCart = ({total}) => {
  return (
      <div className="w-full self-start rounded-lg bg-white p-6 shadow-md lg:w-1/3">
          <h2 className="mb-4 text-xl font-semibold">Summary</h2>

          <div className="mb-4 flex justify-between text-lg font-medium">
              <span>Total:</span>
              <span>$ {total}</span>
          </div>

          <button className="w-full rounded-lg bg-pink-500 py-2 font-semibold text-white transition duration-200 hover:bg-pink-600">
              Proceed to Checkout
          </button>
      </div>
  )
}
