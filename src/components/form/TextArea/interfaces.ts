import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps
  extends Pick<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "value" | "onChange" | "required" | "name" | "id"
  > {
  label?: string;
}
