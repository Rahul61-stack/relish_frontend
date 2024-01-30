import { Button, TextField } from "@mui/material";

function CheckoutForm() {

  return (
    <div>
        <div className="flex justify-center pt-5 md:border-none border-t snap-y">
          <div className="flex-col h-[50%] snap-center">
            <div className=" h-10 w-80 rounded-md">
              <Button
                fullWidth
                variant="contained"
                className="hover:bg-slate-400 bg-slate-600 focus:bg-slate-500"
              >
                GPAY
              </Button>
            </div>
            <div className=" border-white"></div>
            <div className="md:pt-10 pt-5">
              <p className="pt-5 border-t text-xl border-white">
                Shipping Information
              </p>
            </div>
            <div className="pt-5 text-white rounded-lg">
              <TextField
                variant="filled"
                fullWidth
                size="small"
                label="Email"
                color="secondary"
                className="bg-slate-300 rounded-lg"
              />
            </div>
            <div className="pt-5">
              <p className="text-sm">Shipping Address</p>
            </div>
            <div className="pt-5 rounded-lg">
              <div className>
                <TextField
                  variant="filled"
                  fullWidth
                  size="small"
                  label="Name"
                  className="bg-slate-300 rounded-t-xl"
                />
              </div>
              <div>
                <TextField
                  variant="filled"
                  fullWidth
                  disabled
                  size="small"
                  label="India"
                  className="bg-slate-300"
                />
              </div>
              <div>
                <TextField
                  variant="filled"
                  fullWidth
                  size="small"
                  label="Address Line 1"
                  className="bg-slate-300"
                />
              </div>
              <div>
                <TextField
                  variant="filled"
                  fullWidth
                  size="small"
                  label="Address Line 2"
                  className="bg-slate-300"
                />
              </div>
             <div className="w-80 flex">
             <div className="border-r border-black">
                <TextField
                  variant="filled"
                  fullWidth
                  size="small"
                  label="City"
                  className="bg-slate-300"
                />
              </div>
              <div>
                <TextField
                  variant="filled"
                  fullWidth
                  size="small"
                  label="Pincode"
                  className="bg-slate-300"
                />
              </div>
             </div>
              <div className="">
                <TextField
                  variant="filled"
                  fullWidth
                  size="small"
                  label="State"
                  className="bg-slate-300 rounded-b-xl ring-xl focus:text-white"
                />
              </div>
              <div className="pt-5">
                <p>Payment Details</p>
              </div>
              <div>
                <p className="text-sm py-5">Card Information</p>
              </div>
              <div className="">
                <TextField
                  variant="filled"
                  fullWidth
                  size="small"
                  label="Card Number"
                  placeholder="1234 1234 1234 1234"
                  className="bg-slate-300 rounded-t-xl"
                />
              </div>
              <div className="w-80 flex">
              <div className="border-r border-black">
              <TextField
                  variant="filled"
                  fullWidth
                  size="small"
                  label="MM/YY"
                  className="bg-slate-300 rounded-bl-xl"
                />
              </div>
              <div>
              <TextField
                  variant="filled"
                  fullWidth
                  size="small"
                  label="CVV"
                  className="bg-slate-300 rounded-br-xl"
                />
              </div>
              </div>
              <div className="py-10">
                <Button fullWidth variant="contained" className="bg-slate-600">PAY</Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default CheckoutForm;
