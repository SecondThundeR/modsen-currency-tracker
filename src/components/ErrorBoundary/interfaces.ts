import { PropsWithChildren } from "react";

export interface ErrorBoundaryProps extends PropsWithChildren {}

export interface ErrorBoundaryState {
  errorDetails: string | undefined;
  hasError: boolean;
}
