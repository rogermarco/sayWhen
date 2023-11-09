interface ButtonProps {
  label: string,
}

function Button ({ label }: ButtonProps) {
  return ( 
    <button
    className=
      'h-20 w-52 items-center text-center tracking-tighter rounded-lg bg-logo-orange text-white transition-colors hover:bg-orange-600'
    >
      {label}
    </button>
   );
}

export default Button;