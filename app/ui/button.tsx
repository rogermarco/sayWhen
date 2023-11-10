'use client'

interface ButtonProps {
  label: String,
}

function Button ({ label }: ButtonProps) {

  const scrollToForm = () => {
    const element = document.getElementById('form');
    element?.scrollIntoView({ behavior: 'smooth' })
}

  return ( 
    <>
    {(label == 'Register / Log in') && <button
      className='btn-primary'
    >
    {label}
    </button>
    ||
    (label == 'Continue without account') &&
    <button
      className='btn-primary'
      onClick={scrollToForm}
    >
    {label}
    </button>
    }
    </>
  );
}

export default Button;