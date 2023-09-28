import { HomeIcon, PersonIcon, TruckIcon } from "@/assets/Icons";
import Pic from "@/assets/headphone.png";
import CustomCheckoutInputSection from "@/components/Checkout/CustomCheckoutInputSection";
import CustomInput from "@/components/shared/CustomInputField/CustomInput";
import CustomButton from "@/components/shared/costomButtonField/CustomButton";
import ToggleSwitch from "@/components/shared/toggleSwitch/ToggleSwitch";
import { CreditCardIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const price = "$ 1,200.00";
  const itemNumber = 1;
  return (
    <div className="mx-64 mt-20">
      <div className="grid grid-cols-12 ">
        <section className="col-span-8   ">
          {/* Email */}
          <CustomCheckoutInputSection
            labelText="Email"
            labelIcon={<PersonIcon className="h-6 w-6" />}
            inputType={"email"}
            inputPlaceholder={"Enter email"}
          />
          {/* Home */}
          <CustomCheckoutInputSection
            labelText="Home"
            labelIcon={<HomeIcon className="h-6 w-6" />}
            inputType={"text"}
            inputPlaceholder={"Add address"}
          />
          {/* Shipping Address */}
          <CustomCheckoutInputSection
            labelText="Shipping Address"
            labelIcon={<TruckIcon className="h-6 w-6" />}
            inputType={"text"}
            inputPlaceholder={"Add shipping address"}
          />
          {/* Payment Method */}
          <CustomCheckoutInputSection
            labelText="Payment Method"
            labelIcon={<CreditCardIcon className="h-6 w-6" />}
            inputType={"text"}
            inputPlaceholder={"Select payment method"}
          />

          <div className=" flex gap-6 items-center mx-6 border py-4 pl-6 ">
            <div className="">
              <ToggleSwitch />
            </div>

            <p className="text-xs mr-20">
              By submitting my email and mobile number on this form, I agree to
              receive automated promotional and personalized marketing messages
              (i.e. cart reminders) at the email or phone number provided.
              Consent is not a condition of purchase. More information: Terms of
              Service and Privacy Policy
            </p>
          </div>
        </section>
        <section className="col-span-4 p-10 border rounded-lg ">
          <div className="mx-6">
            <span className=" font-medium ">
              {itemNumber} item: {price}
            </span>
            <Image src={Pic} width={"w-8"} height={"w-8"} alt="" />
          </div>
          <div className="flex items-center justify-between mt-2 mx-6">
            <h3 className="font-semibold">Subtotal</h3>
            <span className="font-medium">{price}</span>
          </div>
          <div className="flex items-center justify-between mt-2 mx-6">
            <h2 className="font-semibold ">Total</h2>
            <span className="font-medium">{price}</span>
          </div>
          {/* Coupon Code */}
          <div className="flex w-full mt-3">
            <div className="w-full">
              <CustomInput
                placeholder={"Your Coupon Code"}
                className={"h-16 p-2 rounded-lg border border-gray-400"}
              />
            </div>
            <div className="">
              <CustomButton
                text={"Apply"}
                className={
                  "text-white bg-[#B5B5B5] text-base h-16 w-[125px] px-6 py-3 font-semibold rounded-lg"
                }
              />
            </div>
          </div>
          <CustomButton
            text={"Submit Order"}
            className="bg-[#FAB758] px-3 py-4 text-[#101940] font-semibold text-lg rounded-lg w-full mt-4"
          />
        </section>
      </div>
    </div>
  );
}
