import './MemoryViewMobile.css'
import emailjs from 'emailjs-com'

export const MemoryViewMobile = () => {


  function sendEmail(e: any) {
    e.preventDefault()

    emailjs.sendForm('service_g3khjxx', 'template_1dg75hm', e.target, 'user_0BffWI3MsXNgpgOieEg4B')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}


