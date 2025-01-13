import { component$ } from "@builder.io/qwik";
import { LuXCircle, LuHome, LuMail } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-[#FFDA79] to-amber-100 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <div class="flex justify-center">
          <div class="rounded-full bg-red-100 p-3">
            <LuXCircle class="w-12 h-12 text-red-500" />
          </div>
        </div>
        
        <div class="space-y-4">
          <h1 class="text-3xl font-bold text-gray-800">
            Purchase Canceled
          </h1>
          <p class="text-gray-600">
            We're sorry to see you go. If you experienced any issues during checkout, 
            we're here to help.
          </p>
        </div>

        <div class="border-t border-gray-200 pt-6 space-y-4">
          <p class="text-sm text-gray-500">
            If you have any questions or need assistance, our support team is ready to help you.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/"
              class="inline-flex items-center justify-center gap-2 bg-[#FFDA79] hover:bg-[#FFE5A3] text-gray-800 font-medium py-2 px-6 rounded-full transition-colors shadow-md"
            >
              <LuHome class="w-4 h-4" />
              Return to Home
            </a>
            {/* TODO: Change to contact page  */}
            <a 
              href="/About"
              class="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-full transition-colors shadow-md"
            >
              <LuMail class="w-4 h-4" />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});