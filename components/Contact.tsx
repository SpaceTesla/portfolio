const Contact = () => {
  return (
    <section id='contact' className='py-20 bg-base-200 text-base-content'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Contact Me</h2>
        <div className='card max-w-md mx-auto bg-base-100 shadow-lg'>
          <div className='card-body'>
            <h3 className='card-title text-xl'>Get in touch</h3>
            <p className='text-base-content/70 mb-4'>
              Fill out the form below to send me a message.
            </p>
            <form className='space-y-4'>
              <div className='form-control'>
                <label htmlFor='name' className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  id='name'
                  type='text'
                  placeholder='Your name'
                  className='input input-bordered w-full bg-base-200 text-base-content'
                />
              </div>
              <div className='form-control'>
                <label htmlFor='email' className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  id='email'
                  type='email'
                  placeholder='Your email'
                  className='input input-bordered w-full bg-base-200 text-base-content'
                />
              </div>
              <div className='form-control'>
                <label htmlFor='message' className='label'>
                  <span className='label-text'>Message</span>
                </label>
                <textarea
                  id='message'
                  placeholder='Your message'
                  className='textarea textarea-bordered w-full bg-base-200 text-base-content'
                />
              </div>
              <button type='submit' className='btn btn-primary w-full mt-4'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
