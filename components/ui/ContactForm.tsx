'use client';

import { useState } from 'react';
import { ContactForm as ContactFormType } from '@/types';

interface ContactFormProps {
  propertyId?: string;
  propertyTitle?: string;
}

export default function ContactForm({ propertyId, propertyTitle }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyId: propertyId,
    inquiryType: propertyId ? 'Property' : 'General',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          propertyId: propertyId,
          inquiryType: propertyId ? 'Property' : 'General',
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {propertyTitle ? `Inquire About ${propertyTitle}` : 'Get in Touch'}
      </h2>
      <p className="text-gray-600 mb-6">
        Fill out the form below and our team will get back to you within 24 hours.
      </p>

      {submitStatus === 'success' && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Thank you for your inquiry! We'll contact you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="+971 XX XXX XXXX"
          />
        </div>

        {!propertyId && (
          <div>
            <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
              Inquiry Type
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="General">General Inquiry</option>
              <option value="Property">Property Inquiry</option>
              <option value="Project">Project Inquiry</option>
              <option value="Tour">Schedule a Tour</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
            placeholder="Tell us about your requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
