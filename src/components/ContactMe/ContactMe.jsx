import React, { useState } from 'react';

const ContactMe = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState({ visible: false, message: '' });

  const handlePhoneChange = (e) => {
    setPhone(e.target.value.replace(/^\+63/, ''));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8894f76c-c62f-4909-ac7c-2f0d0d9ffbd9");

    const object = Object.fromEntries(formData);
    object.phone = `+63${phone}`;
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setNotification({ visible: true, message: 'Your message has been sent!' });
      } else {
        setNotification({ visible: true, message: 'Something went wrong. Please try again.' });
      }

      setTimeout(() => setNotification({ ...notification, visible: false }), 3000);

    } catch (error) {
      setNotification({ visible: true, message: 'An error occurred. Please try again.' });
      setTimeout(() => setNotification({ ...notification, visible: false }), 3000);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-1/2 p-4 relative my-12 py-12">
      <form onSubmit={onSubmit} className="max-w-lg w-full bg-card p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Contact Me</h2>

        <div className="mb-4">
          <label className="block text-text font-semibold mb-2">Full Name</label>
          <input
            type="text"
            name='name'
            value={name}
            onChange={handleNameChange}
            className="w-full p-3 border border-secondary rounded-md bg-miniCard text-text placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-text font-semibold mb-2">Email Address</label>
          <input
            type="email"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-secondary rounded-md bg-miniCard text-text placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-text font-semibold mb-2">Contact</label>
          <input
            type="text"
            name='phone'
            value={`+63${phone}`}
            onChange={handlePhoneChange}
            className="w-full p-3 border border-secondary rounded-md bg-miniCard text-text placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="+63912345678"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="hidden"
            name='subject'
            value={`New submission from ${name}`}
            className="w-full p-3 border border-secondary rounded-md bg-miniCard text-text placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-text font-semibold mb-2">Your Message</label>
          <textarea
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-secondary rounded-md bg-miniCard text-text placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none h-52"
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-secondary text-card rounded-md font-semibold hover:bg-primary hover:text-secondary transition duration-300"
        >
          Send Message
        </button>
      </form>

      {notification.visible && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{notification.message}</span>
        </div>
      )}
    </section>
  );
};

export default ContactMe;
