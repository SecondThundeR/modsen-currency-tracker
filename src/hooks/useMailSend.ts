import { useCallback, useState } from "react";

import { SendMailOptions } from "@/features/mail/interfaces";
import { sendContactMail } from "@/features/mail/sendContactMail";

function useMailSend() {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSend = useCallback(async (options: SendMailOptions) => {
    setIsSending(true);
    setIsError(false);
    setIsSent(false);

    const sendStatus = await sendContactMail(options);
    if (!sendStatus) {
      setIsSending(false);
      setIsError(true);
      return;
    }

    setIsSending(false);
    setIsSent(true);
  }, []);

  return { isSent, isSending, isError, onSend };
}

export default useMailSend;
