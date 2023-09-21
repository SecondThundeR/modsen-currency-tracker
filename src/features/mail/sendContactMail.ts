import axios, { AxiosRequestConfig } from "axios";

import { SendMailOptions } from "./interfaces";

/**
 * Using backend for sending own emails using Mailgun
 * @see https://github.com/SecondThundeR/currency-tracker-mail-backend
 */
export async function sendContactMail(options: SendMailOptions) {
  try {
    const { recepient, subject, text } = options;
    const requestConfig = {
      method: "post",
      url: process.env.BACKEND_MAIL_ENDPOINT,
      data: {
        to: recepient,
        subject,
        text,
      },
    } satisfies AxiosRequestConfig;

    const response = await axios(requestConfig);
    return response.status === 200;
  } catch (error: unknown) {
    console.error(error);
  }
}
