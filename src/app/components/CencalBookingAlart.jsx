"use client";

import { AlertDialog, Button } from "@heroui/react";
import { errorToast, successToast } from "../utils-toast/toast";
import { useRouter } from "next/navigation";

export function CancalBookingAlart({ bookingId }) {
  const router = useRouter();

  const handleCancelBooking = async () => {
    try {
      const res = await fetch(`http://localhost:8000/booking/${bookingId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();

      if (result.deletedCount > 0) {
        successToast("Booking cancelled successfully");
        router.refresh(); // 🔄 বুকিং লিস্টের সার্ভার কম্পোনেন্ট ডাটা রিফ্রেশ করবে
      } else {
        errorToast("Failed to cancel booking");
      }
    } catch (error) {
      console.error(error);
      errorToast("Something went wrong!");
    }
  };

  return (
    <AlertDialog>
      {/* প্রধান বাটন যা ট্রিগার হিসেবে কাজ করবে */}
      <Button className="px-4 py-2 text-xs font-medium text-red-400/90 hover:text-red-400 bg-red-950/10 hover:bg-red-950/20 border border-red-900/30 rounded-xl transition-all">
        Cancel Booking
      </Button>
      
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] bg-[#0d1520] border border-gray-800 text-gray-200 rounded-2xl p-6">
            <AlertDialog.CloseTrigger className="text-gray-400 hover:text-gray-200" />
            <AlertDialog.Header className="flex items-center gap-2 mb-3">
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-lg font-bold text-gray-100">
                Cancel This Booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body className="mb-6">
              <p className="text-sm text-gray-400">
                Are you sure you want to cancel this ride? This action cannot be undone and your secured slot will be released.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex justify-end gap-3">
              {/* ক্যানসেল বাটন - শুধু পপআপ বন্ধ করবে */}
              <Button slot="close" variant="tertiary" className="text-gray-400 hover:text-gray-200">
                Go Back
              </Button>
              {/* কনফার্ম ডিলিট বাটন - এটি এখন ক্লিক করলে এপিআই কল করবে */}
              <Button 
                onClick={handleCancelBooking} 
                slot="close" 
                variant="danger"
                className="bg-red-600 hover:bg-red-500 text-white font-medium px-4 py-2 rounded-xl transition-colors"
              >
                Confirm Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}