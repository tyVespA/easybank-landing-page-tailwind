function MainButton({ label = "Click" }) {
  return (
    <button className="flex text-white bg-gradient-to-r from-lime-green to-bright-cyan px-6 py-3 rounded-full font-bold text-sm">
      {label}
    </button>
  );
}

export default MainButton;
