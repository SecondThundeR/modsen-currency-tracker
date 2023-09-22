import React, { Component, ErrorInfo } from "react";

import styles from "./ErrorBoundary.module.css";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./interfaces";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    errorDetails: undefined,
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
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
