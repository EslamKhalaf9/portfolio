import ContactForm from "./contact-form"

const ContactSection = () => {
  return (
    <div id="contact" className="min-h-[90vh] flex flex-col justify-center items-center border-y border-primary">
      <div className="contianer">
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactSection