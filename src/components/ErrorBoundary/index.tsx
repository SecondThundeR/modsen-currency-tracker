import React, { Component, ErrorInfo, ReactNode } from "react";

import styles from "./ErrorBoundary.module.css";

interface Props {
  children?: ReactNode;
}

interface State {
  errorDetails: string | undefined;
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    errorDetails: undefined,
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorDetails: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles["ErrorBoundary"]}>
          <h1>
            Sorry, there was an error:{" "}
            {this.state.errorDetails ?? "Unknown error, no info"}
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
