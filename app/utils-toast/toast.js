// app/utils-toast/toast.js
import toast from 'react-hot-toast';

// কমন স্টাইল (যেন সব টোস্ট দেখতে একই সাইজ আর গ্লাস-লুক পায়)
const commonStyle = {
  background: 'rgba(10, 15, 30, 0.85)',
  backdropFilter: 'blur(10px)',
  padding: '14px 24px',
  color: '#ffffff',
  borderRadius: '12px',
  fontSize: '14px',
  fontWeight: '500',
};

// ১. লোডিং টোস্ট (এইটা আইডি রিটার্ন করবে যা পরে ফিক্স করতে লাগবে)
export const showLoadingToast = (message = 'Processing...') => {
  return toast.loading(message, {
    style: {
      ...commonStyle,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
    },
  });
};

// ২. সাকসেস টোস্ট (নিওন গ্রিন গ্লো)
export const successToast = (message) => {
  toast.success(message, {
    style: {
      ...commonStyle,
      border: '1px solid rgba(116, 219, 39, 0.2)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), 0 0 15px rgba(116, 219, 39, 0.3)',
    },
    iconTheme: { primary: '#74db27', secondary: '#0a0f1e' },
  });
};

// ৩. এরর টোস্ট (লাল গ্লো)
export const errorToast = (message) => {
  toast.error(message, {
    style: {
      ...commonStyle,
      border: '1px solid rgba(239, 68, 68, 0.2)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), 0 0 15px rgba(239, 68, 68, 0.3)',
    },
    iconTheme: { primary: '#ef4444', secondary: '#0a0f1e' },
  });
};