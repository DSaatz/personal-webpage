'use client'

import { useState } from 'react'
import { submitForm } from '@/app/actions/submit-form';

export default function Contact() {
  const [formState, setFormState] = useState<{
    errors?: { [key: string]: string[] };
    success?: boolean;
    message?: string;
  }>({})

  async function handleSubmit(formData: FormData) {
    const result = await submitForm(formData)
    setFormState(result)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form action={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
                aria-describedby="name-error"
              />
              {formState.errors?.name && (
                <p id="name-error" className="mt-2 text-sm text-red-600">{formState.errors.name[0]}</p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
                aria-describedby="email-error"
              />
              {formState.errors?.email && (
                <p id="email-error" className="mt-2 text-sm text-red-600">{formState.errors.email[0]}</p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
                aria-describedby="message-error"
              ></textarea>
              {formState.errors?.message && (
                <p id="message-error" className="mt-2 text-sm text-red-600">{formState.errors.message[0]}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
          {formState.success && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg" role="alert">
              {formState.message}
            </div>
          )}
          {!formState.success && formState.message && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg" role="alert">
              {formState.message}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

