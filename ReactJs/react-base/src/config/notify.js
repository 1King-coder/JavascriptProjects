import { toast } from 'react-toastify';

export default function notify(content) {
  toast(content.msg, {
    toastId: `Toastify__${content.id}`,
  });
}
