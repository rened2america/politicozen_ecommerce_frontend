import { component$ } from "@builder.io/qwik";
import { LuCheckCircle, LuHome } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-[#FFDA79] to-amber-100 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <div class="flex justify-center">
          <div class="rounded-full bg-green-100 p-3">
            <LuCheckCircle class="w-12 h-12 text-green-500" />
          </div>
        </div>
        
        <div class="space-y-4">
          <h1 class="text-3xl font-bold text-gray-800">
            Thank you for your purchase!
          </h1>
          <p class="text-gray-600">
            We hope you enjoy your product. Your order confirmation has been sent to your email.
          </p>
        </div>

        <div class="border-t border-gray-200 pt-6">
          <p class="text-sm text-gray-500 mb-6">
            If you have any questions about your order, please don't hesitate to contact our support team.
          </p>
          
          <a 
            href="/"
            class="inline-flex items-center gap-2 bg-[#FFDA79] hover:bg-[#FFE5A3] text-gray-800 font-medium py-2 px-6 rounded-full transition-colors shadow-md"
          >
            <LuHome class="w-4 h-4" />
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
});