interface ButtonProps {
    label: string,
    ClickHandler: () => void;
}

export default function Button(props: ButtonProps) {

    return (
      <button className="bg-red-500 text-white px-8 py-2 rounded-md transition hover:scale-110 hover:bg-red-400" 
              onClick={props.ClickHandler}>
          {props.label}
      </button>
    );
}