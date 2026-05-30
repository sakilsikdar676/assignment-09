"use client";

import { AlertDialog, Button } from "@heroui/react";
import { errorToast, successToast } from "../utils-toast/toast";
import { useRouter } from "next/navigation";

export function DeleteAlart({ carId, carData }) {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8000/cars/${carId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });

    const result = await res.json();
    if (result.deletedCount > 0) {
      successToast("Car deleted successfully");
      router.refresh();
    } else {
      errorToast("Failed to delete car");
    }
  };

  return (
    <AlertDialog>
      <Button
        className="flex items-center justify-center gap-2 px-6 py-6 text-sm font-semibold text-white bg-whaite hover:bg-[#c91717] rounded-md transition-colors duration-300 shadow-sm shadow-red-600 transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)] transform active:scale-[0.98]"
        variant="ghost"
      >
        Delete Car
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] border border-white/10 bg-[#001d3d]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Data permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong className="text-white">{carData.carName}</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="uoutlin">
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                slot="close"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-whaite hover:bg-[#c91717] rounded-md transition-colors duration-300 shadow-sm shadow-red-600"
                variant="ghost"
              >
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
