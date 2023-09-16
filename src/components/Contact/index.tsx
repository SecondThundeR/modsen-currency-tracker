import React, { FormEventHandler } from "react";

import FormWrapper from "@/components/form/FormWrapper";
import Input from "@/components/form/Input";
import TextArea from "@/components/form/TextArea";
import Alert from "@/components/ui/Alert";
import Button from "@/components/ui/Button";
import useMailSend from "@/hooks/useMailSend";

import styles from "./Contact.module.css";

function Contact() {
  const { isSent, isSending, isError, onSend } = useMailSend();

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const subject = formData.get("subject");
    const text = formData.get("text");
    if (!email || !subject || !text) return;

    onSend({
      recepient: email.toString(),
      subject: subject.toString(),
      text: text.toString(),
    }).catch(console.error);
  };

  return (
    <div className={styles["Contact"]}>
      <h1>Contact us</h1>
      {isError && (
        <Alert type="error">
          Seems like there is an error! Try to send again or contact support via
          support@example.com
        </Alert>
      )}
      {isSent && (
        <Alert type="success">
          Yay! We have received your message. We will reply back to you as soon
          as possible!
        </Alert>
      )}
      <FormWrapper onSubmit={onSubmit}>
        <Input
          id="email"
          name="email"
          label="Enter your email"
          type="email"
          required
        />
        <Input
          id="subject"
          name="subject"
          label="Enter your subject"
          required
        />
        <TextArea id="text" name="text" label="Enter your text" required />
        <Button type="submit" disabled={isSending}>
          Send mail
        </Button>
      </FormWrapper>
    </div>
  );
}

export default Contact;
