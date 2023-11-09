interface ButtonProps {
  label: string,
}

function Button ({ label }: ButtonProps) {
  return ( 
    <button
    className=
      'h-20 w-52 items-center text-center rounded-lg bg-orange-600 text-white transition-colors hover:bg-orange-800'
    >
      {label}
    </button>
   );
}

export default Button;