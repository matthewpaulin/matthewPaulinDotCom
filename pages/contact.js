export default function Contact() {
  return (
    <div className="container my-3 has-text-centered">
      <h1 className="is-size-1 has-text-weight-bold has-text-black">
        Contact Me
      </h1>
      <p className="has-text-weight-medium is-size-4">
        Want to contact me? Email me at{" "}
        <a href="mailto:matthewjpaulin@gmail.com">matthewjpaulin@gmail.com</a>{" "}
        or fill out the form below
      </p>
      <hr />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdayRymAaymh4PBzuhNe6yFwqhvrSy91nyf1YQm1wyjUYyyTQ/viewform?embedded=true"
        width="100%"
        height="849"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0">
        Loading…
      </iframe>
    </div>
  );
}
