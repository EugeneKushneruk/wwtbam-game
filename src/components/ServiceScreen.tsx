import type { FC } from "react";

type serviceScreenSpinnerType = {
  enableSpinner: boolean,
  showError?: never,
}
type serviceScreenErrorType = {
  enableSpinner?: never,
  showError: boolean,
}
type serviceScreenProps = | serviceScreenSpinnerType | serviceScreenErrorType

const ServiceScreen: FC<serviceScreenProps> = ({ enableSpinner, showError }) => {
  return (
    <div className="service-screen">
      <div className="service-screen__wrapper">
        {enableSpinner && (
          <div className="service-screen__spinner" />
        )}

        {showError && (
          <h1 className="service-screen__message">
            <span className="service-screen__message-txt">Oops, something went wrong...</span>
            <span className="service-screen__message-txt">Please, try to reload the page</span>
          </h1>
        )}
      </div>
    </div>
  )
}

export default ServiceScreen;