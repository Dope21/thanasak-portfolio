import { FaTelegramPlane } from 'react-icons/fa'
import { useCallback, useState } from 'react'
import { SubmitBtn } from './button'
import { Input, Area } from './inputs'
import axios from 'axios'

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleOnChange = useCallback(e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }, [])

  const handleServerResponse = useCallback((ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      })
      setInputs({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg },
      })
    }
  }, [])

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
      axios({
        method: 'POST',
        url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
        data: inputs,
      }).then(_response => {
        handleServerResponse(true, 'Thank you, your message has been submitted')
      })
    },
    [inputs, handleServerResponse]
  )

  return (
    <form onSubmit={handleSubmit}>
      {status.info.error && (
        <p
          className="text-red-500 border-red-500 text-center text-lg px-4 py-3 rounded-lg relative border-2"
          role="alert"
        >
          {status.info.msg}
        </p>
      )}

      <div className="flex flex-col gap-5">
        {status.submitted ? (
          <p
            className="sub-text-color text-center text-lg px-4 py-3 rounded-lg relative border-2"
            role="alert"
          >
            Your message has been successfully sent. I will contact you very
            soon!
          </p>
        ) : (
          <>
            <Input
              type="text"
              name="name"
              holder="Your name."
              onChange={handleOnChange}
              value={inputs.name}
            />
            <Input
              type="email"
              name="email"
              holder="Email."
              onChange={handleOnChange}
              value={inputs.email}
            />
            <Area
              name="message"
              holder="Message."
              onChange={handleOnChange}
              value={inputs.message}
            />

            <div className="text-center">
              <SubmitBtn>
                {!status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted!'
                  : 'Submiting...'}
                <FaTelegramPlane size={18} />
              </SubmitBtn>
            </div>
          </>
        )}
      </div>
    </form>
  )
}

export default ContactForm
