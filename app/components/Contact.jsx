import { services } from "../data"
import Image from "next/image"

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto px-4 lg:px-0 pt-16 lg:py-16 lg:space-x-16">
      <div className="flex flex-col items-center lg:w-1/2">
        <h2 className="gradient-header">
          Talk To An Expert
        </h2>
        <div className="flex flex-col-reverse my-8 lg:my-0">
          <div className="content">
            <p>
              Have questions? Don't worry - our solutions experts are here to help! We provide free consultations and site audits for <strong className="uppercase">everyone</strong>. Simply fill out the form and we will be in touch with you shortly.
            </p>
          </div>
          <Image
            src="/expert-team-consultation.png"
            alt="Contact an expert at Adrenalize toget started on your web project today"
            className="my-auto lg:-translate-x-10"
            width={500}
            height={500}
            quality={100}
          />
        </div>
      </div>
      <form className="flex flex-col w-screen space-y-4 bg-base-900 px-6 py-4 lg:px-16 lg:py-12 lg:w-1/2 rounded-md shadow-xl">
        <div className="inputWrapper">
          <input type="text" name="name" id="name" className="w-0 h-0 opacity-0 p-0 m-0" />
          <label htmlFor="clientName">
            Full Name
          </label>
          <input type="text" required name="clientName" id="clientName" placeholder="Your Full Name" />
        </div>
        <div className="inputWrapper">
          <label htmlFor="clientName">
            Email
          </label>
          <input type="email" required name="clientName" id="clientName" placeholder="Your Email Address" />
        </div>
        <div className="inputWrapper">
          <label htmlFor="type">
            Project Type
          </label>
          <select required name="type" id="type">
            {services.map((service, i) => {
              return (
                <option key={i} value={service}>
                  {service}
                </option>
              )
            })}
          </select>
        </div>
        <div className="inputWrapper">
          <label htmlFor="details">
            Details
          </label>
          <textarea required name="details" id="details" rows={4} placeholder="Please include any relevant project details. If you have an existing site, please include the URL."/>
        </div>
        <div className="py-6 lg:pb-0 mx-auto">
        <button className="button" type="submit">
          Submit
        </button>
        </div>
      </form>
    </section>
  )
}
