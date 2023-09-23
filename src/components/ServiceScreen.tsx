type ServiceScreenSpinnerType = {
  enableSpinner: boolean;
  showError?: never;
};
type ServiceScreenErrorType = {
  enableSpinner?: never;
  showError: boolean;
};
type ServiceScreenProps = ServiceScreenSpinnerType | ServiceScreenErrorType;

function ServiceScreen({ enableSpinner, showError }: ServiceScreenProps) {
  return (
    <section className="service-screen">
      <div className="service-screen__wrapper">
        {enableSpinner && <div className="service-screen__spinner" />}

        {showError && (
          <h1 className="service-screen__message">
          <span className="service-screen__message-txt">
            Oops, something went wrong...
          </span>
            <span className="service-screen__message-txt">
            Please, try to reload the page
          </span>
          </h1>
        )}
      </div>
    </section>
  );
}

export default ServiceScreen;
